import React, {Component} from 'react'
import ContactForm from 'components/ContactForm'

export default class App extends Component {
    constructor() {
        super();
        this. _handleClick = this. _handleClick.bind(this);
    }
    render() {
        return(
            <ContactForm/>
        )
    }
    _handleClick() {
        console.log(this);
    }
}
