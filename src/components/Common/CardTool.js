// Card Tools
// -----------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'animo/animo';

const checkRequiredProps = (props, propName, componentName) => {
  if (!props.dismiss && !props.refresh) {
    return new Error(`One of 'dismiss' or 'refresh' is required by '${componentName}' component.`)
  }
}

/**
 * Add action icons to card components to allow
 * refresh data or remove a card element
 */
class CardTool extends Component {

    static propTypes = {
        /** show the refreshe icon */
        refresh: checkRequiredProps,
        /** show the remove icon */
        dismiss: checkRequiredProps,
        /** triggers before card is removed */
        onRemove: PropTypes.func,
        /** triggers after card was removed */
        onRemoved: PropTypes.func,
        /** triggers when user click on refresh button */
        onRefresh: PropTypes.func,
        /** name if the icon class to use as spinner */
        spinner: PropTypes.string
    }

    static defaultProps = {
        refresh: false,
        dismiss: false,
        onRemove: () => {},
        onRemoved: () => {},
        onRefresh: () => {},
        spinner: 'standard'
    }

    handleDismiss = e => {
        // find the first parent card
        const card = $(this.element).closest('.card');

        const removeCol = cols => {
            cols
                .filter((idx, el) => ($(el).is('[class*="col-"]:not(.sortable)') && !el.firstChild))
                .remove();
        }

        const destroyCard = () => {
            const col = card.parent();
            // remove card
            card.remove();
            // remove parent column if is empty
            removeCol(col);
            // An event to catch when the card has been removed from DOM
            this.props.onRemoved();
        }

        const confirmRemove = () => card.animo({ animation: 'bounceOut' }, destroyCard)

        // Trigger the event and finally remove the element
        this.props.onRemove(card, confirmRemove);

    }

    handleRefresh = e => {
        const whirlClass = 'whirl';
        const card = $(this.element).parents('.card').eq(0)

        // method to clear the spinner when done
        const done = () => { card.removeClass(whirlClass); }
        // start showing the spinner
        card.addClass(whirlClass + ' ' + this.props.spinner);

        // event to remove spinner when refres is done
        this.props.onRefresh(card, done);
    }

    setRef = node => this.element = node;

    render() {
        return (
            <div ref={this.setRef} className="card-tool float-right">
                { this.props.refresh && <em onClick={this.handleRefresh} className="fas fa-sync"></em> }
                { this.props.dismiss && <em onClick={this.handleDismiss} className="fa fa-times"></em> }
            </div>
        )
    }
}

export default CardTool;
