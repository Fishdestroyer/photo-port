import React, { useState } from 'react';
const { name, email, message } = 'formState';

function ContactForm() {
    
    const [formState, setFormState] = useState({ name:'', email:'',message:''});
    // JSX
    function handleChange(e) {//
        //spread operator
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    //console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                    <button type="submit">Submit</button>
                </div>
           
            </form>
        </section>
    );
}

export default ContactForm;



// 20.4.4- Sync the State