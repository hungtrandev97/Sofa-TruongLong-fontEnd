import $ from 'jquery';

export default (navigator) => {
  const $win = $(window);
  const $html = $('html');
  const $body = $('body');
  const $sidebar = $('.sidebar');

  // AUTOCOLLAPSE ITEMS
  // -----------------------------------

  const sidebarCollapse = $sidebar.find('.collapse');
  sidebarCollapse.on('show.bs.collapse', function (event) {
    event.stopPropagation();
    if ($(this).parents('.collapse').length === 0) { sidebarCollapse.filter('.show').collapse('hide'); }
  });

  // SIDEBAR COLLAPSED ITEM HANDLER
  // -----------------------------------

  const eventName = isTouch() ? 'click' : 'mouseenter';
  let subNav = $();
  $sidebar.on(eventName, '.sidebar-nav > li', function () {
    if (isSidebarCollapsed() || useAsideHover()) {
      subNav.trigger('mouseleave');
      subNav = toggleMenuItem($(this));

      // Used to detect click and touch events outside the sidebar
      sidebarAddBackdrop();
    }
  });

  const sidebarAnyclickClose = $sidebar.data('sidebarAnyclickClose');

  // Allows to close
  if (typeof sidebarAnyclickClose !== 'undefined') {
    $('.wrapper').on('click.sidebar', (e) => {
      // don't check if sidebar not visible
      if (!$body.hasClass('aside-toggled')) return;

      const $target = $(e.target);
      if (!$target.parents('.aside-container').length // if not child of sidebar
        && !$target.parents('.topnavbar-wrapper').length // if not child of header
        && !$target.is('#user-block-toggle') // user block toggle anchor
        && !$target.parent().is('#user-block-toggle') // user block toggle icon
      ) {
        $body.removeClass('aside-toggled');
      }
    });
  }

  function sidebarAddBackdrop() {
    const $backdrop = $('<div/>', { class: 'dropdown-backdrop' });
    $backdrop.insertAfter('.aside-container').on('click mouseenter', () => {
      removeFloatingNav();
    });
  }

  // Open the collapse sidebar submenu items when on touch devices
  // - desktop only opens on hover
  function toggleTouchItem($element) {
    $element
      .siblings('li')
      .removeClass('open')
      .end()
      .toggleClass('open');
  }

  // Handles hover to open items under collapsed menu
  // -----------------------------------
  function toggleMenuItem($listItem) {
    removeFloatingNav();

    const ul = $listItem.find('.sidebar-nav');

    if (!ul.length) return $();
    if ($listItem.hasClass('open')) {
      toggleTouchItem($listItem);
      return $();
    }

    const $aside = $('.aside-container');
    const $asideInner = $('.aside-inner'); // for top offset calculation
    // float aside uses extra padding on aside
    const mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);

    const subNav = reactClone(ul.clone()).appendTo($aside);

    toggleTouchItem($listItem);

    const itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
    const vwHeight = $win.height();

    subNav
      .on('click.subnav', 'a', function (e) {
        e.preventDefault();
        const href = $(this).attr('href');
        navigator(href);
      })
      .addClass('nav-floating')
      .css({
        position: isFixed() ? 'fixed' : 'absolute',
        top: itemTop,
        bottom: (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
      });

    subNav.on('mouseleave', () => {
      toggleTouchItem($listItem);
      subNav.remove();
    });

    return subNav;
  }

  function reactClone(domNode) {
    // quick element clone using a dummy reactid
    // domNode.find('[data-reactid]').andSelf().each(function(idx, el){
    //     el.setAttribute('data-reactid', el.getAttribute('data-reactid') + ('.0'+idx));
    // });
    return domNode;
  }

  function removeFloatingNav() {
    $('.sidebar-subnav.nav-floating').remove();
    $('.dropdown-backdrop').remove();
    $('.sidebar li.open').removeClass('open');
  }

  function isTouch() {
    return $html.hasClass('touch');
  }

  function isSidebarCollapsed() {
    return $body.hasClass('aside-collapsed') || $body.hasClass('aside-collapsed-text');
  }
  /* function isSidebarToggled() {
          return $body.hasClass('aside-toggled');
        }
        function isMobile() {
          return $win.width() < mq.tablet;
        } */
  function isFixed() {
    return $body.hasClass('layout-fixed');
  }

  function useAsideHover() {
    return $body.hasClass('aside-hover');
  }
}; // rendered
