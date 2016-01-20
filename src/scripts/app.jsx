import React from 'react'
import ContactForm from 'components/contact/ContactForm'

export default class App extends React.Component {
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
