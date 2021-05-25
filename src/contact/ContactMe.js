import React from 'react';
import emailjs from 'emailjs-com';

import './ContactMe.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {serviceForm, templateForm, userForm} from "../passwords/FormPassword";

export default function ContactMe() {

    const backButton = getMenuItemByTag('back');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(serviceForm, templateForm, e.target, userForm)
            .then((result) => {
                console.log(result.text);
                window.confirm("MESSAGE SENT");
            }, (error) => {
                console.log(error.text);
                window.alert("something got wrong");
            });
    }

    return (
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="from_name" />
                <label>Your Email</label>
                <input type="email" name="user_email" />
                <label>Leave A Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <ButtonTemplate
                key={backButton.id}
                id={backButton.id}
                width={backButton.width}
                height={backButton.height}
                svgColor={backButton.svgColor}
                textColor={backButton.textColor}
                textField={backButton.textField}
                icon={backButton.icon}
                iconColor={backButton.iconColor}
                tag='menu'
            />
        </div>
    );
}