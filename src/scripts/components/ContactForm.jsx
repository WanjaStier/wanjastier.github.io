import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['name', 'company', 'email', 'message'];

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.age) {
        errors.age = 'Required';
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number';
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old';
    }
    return errors;
};

class ContactForm extends Component {

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    };

    render() {
        const {fields: {name, company, email, message}, handleSubmit, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Your name" {...name}/>
                </div>
                <div>
                    <label htmlFor="company">Company (website)</label>
                    <input type="text" name="company" placeholder="Company (website)" {...company}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" {...email}/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea type="message" name="email" placeholder="Message" {...message}/>
                </div>
                <button disabled={submitting} onClick={handleSubmit}>
                    {submitting ? <i/> : <i/>} Submit
                </button>
            </form>
        );
    }
}

ContactForm = reduxForm({
    form: 'contact',
    fields,
    validate
})(ContactForm);

export default ContactForm;
