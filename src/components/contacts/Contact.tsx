import React, { useRef } from 'react';
import "./contact.css"
import {FiMail} from "react-icons/fi";
import {FaTelegramPlane} from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e:any) => {
        e.preventDefault();

        // @ts-ignore
        emailjs.sendForm('service_0cxfvvf', 'template_ulajmns', form.current, 'OHujfVIL04WlDuGVu')
        e.target.reset()
    };

    return (
        <section id={'contact'}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <FiMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>vikasatta1998@gmail.com</h5>
                        <a href={'https://vikasatta1998@gmail.com'} target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaTelegramPlane className='contact__option-icon'/>
                        <h4>Telegram</h4>
                        <h5>t.me/vika_satta</h5>
                        <a href={'tg://resolve?domain=vika_satta'} target='_blank'>Send a message</a>
                    </article>
                </div>

                <form
                    // @ts-ignore
                    ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows={7} placeholder='Your Message' required/>
                    <button type='submit' className='btn btn-primary'>Send a message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;