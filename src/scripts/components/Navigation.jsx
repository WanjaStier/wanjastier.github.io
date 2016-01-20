import React, {Component} from 'react';
import ContactForm from 'components/ContactForm';
import {updateRoute} from 'actions/app';
import { routeActions } from 'redux-simple-router'

//TODO: outsource this
const navItems = [{label:'Home', route:'home'},
    {label:'Work', route:'work'},
    {label:'Services', route:'services'},
    {label:'Contact', route:'contact'}];

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'home'
        };
    }

    setFilter(filter) {
        this.setState({selected: filter});
    }

    isItemSelected(item) {
        return this.state.selected === item;
    }

    render() {
        return(
            <nav className="nav">
                <ul className="nav__list">
                    {navItems.map(item =>
                        <li className="nav__list__item" key={item.route}>
                            <a className={'nav__list__item__link' + (this.isItemSelected(item.route) ? '-active' : '') } href="#" onClick={this.setFilter.bind(this, item.route)}>{item.label}</a>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
    _handleClick() {
        console.log(this);
    }
}
