/**
* Libraries
*/

import React, {
    useState
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './sendMessage.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* SendMessage component definition and export
*/

export const SendMessage = (props) => {

    /**
    * State
    */

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    /**
    * Methods
    */

    const handleOnInputChange = (e, field) => {
        switch(field){
            case 'name':
                return setName(e.target.value);
            case 'email':
                return setEmail(e.target.value);
            case 'contact':
                return setContact(e.target.value);
            case 'company':
                return setCompany(e.target.value);
            case 'message':
                return setMessage(e.target.value);
        }
    }

    const onSubmit = () => {
        props.submitMessage(name, email, contact, company, message);
        setName('');
        setEmail('');
        setContact('');
        setCompany('');
        setMessage('');
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('contactInfo').value = '';
        document.getElementById('company').value = '';
        document.getElementById('message').value = '';
    }
   
    /**
    * Markup
    */

    return(
        <div className="sendMessage">
            <div className="sendMessage-wrapper">
                <input placeholder="Full Name" id="fullName" onChange={() => handleOnInputChange(event, "name")}/>
                <input placeholder="Email" id="email" onChange={() => handleOnInputChange(event, "email")}/>
                <input placeholder="Contact" id="contactInfo" onChange={() => handleOnInputChange(event, "contact")}/>
                <input placeholder="Company" id="company" onChange={() => handleOnInputChange(event, "company")}/>
            </div>
            <textarea placeholder="Your Message" id="message" rows="2" onChange={() => handleOnInputChange(event, "message")}></textarea>
            <Button 
                className={"sendMessage-submit"}
                outerDivClassName={"sendMessage-outerDiv-submit"}
                onClick={onSubmit}
                text={"Submit"}
                disabled={name === '' || email === '' || contact === '' || company === '' || message === ''}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return {
            images: Selectors.getImagesState(state)
        };
    },
    (dispatch) => {
        return {
            submitMessage: bindActionCreators(Actions.submitMessage, dispatch)
        };
    }
)(SendMessage);
 