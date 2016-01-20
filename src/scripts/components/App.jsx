import React, {Component} from 'react';
import ContactForm from 'components/ContactForm';
import Navigation from 'components/Navigation'
import {updateRoute} from 'actions/app';
import { routeActions } from 'redux-simple-router'


export default class App extends Component {
    constructor() {
        super();
        this. _handleClick = this. _handleClick.bind(this);
    }
    render() {
        return(
            <div>
                <Navigation/>
                <ContactForm/>
            </div>
        )
    }
    _handleClick() {
        console.log(this);
    }
}
