const Menu = [
    {
      heading: "Main Navigation",
      translate: "sidebar.heading.HEADER",
    },
    {
      name: "Single View",
      path: "singleview",
      icon: "icon-grid",
      translate: "sidebar.nav.SINGLEVIEW",
    },
    {
      name: "Menu",
      icon: "icon-speedometer",
      translate: "sidebar.nav.menu.MENU",
      label: { value: 1, color: "info" },
      submenu: [
        {
          name: "Submenu",
          translate: "sidebar.nav.menu.SUBMENU",
          path: "submenu",
        },
      ],
    },
    {
      name: "Demo Export Pdf",
      path: "demo-pdf",
      icon: "icon-arrow-down-circle",
      translate: "sidebar.nav.DEMO_EXPORT_PDF",
    },
  ];
  
  const ConsumerMenu = [
    {
      name: "About",
      path: "about",
    },
    {
      name: "Consumers",
      path: "consumers",
    },
    {
      name: "HealthCare",
      path: "healthCare",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];
  
  const AdminMenu = [
    {
      heading: "Users",
    },
    {
      name: "Consumers",
      path: "consumers",
      icon: "icon-people",
    },
    {
      name: "Health Care",
      path: "hcp",
      icon: "icon-user-female",
    },
  ];
  
  export { Menu, ConsumerMenu, AdminMenu };
  