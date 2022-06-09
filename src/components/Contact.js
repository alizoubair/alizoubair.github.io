import React from 'react'

const Contact = () => {
    return(
        <section id="contact" className='page-content layout contact'>
            <header className='page-header'>
                <h1 className='hed-title heading'>Get In Touch</h1>
                <div>
                    <p>If you'd like to hire me, or if you're just hoping to get in touch, feel free to use the form below</p>
                </div>
            </header>
            
            <div className='content-main'>
                <form>
                    <fieldset>
                        <ol className='list-step'>
                            <li className='contact-step'>
                                <label className='field-label' for="sender">Name</label>
                                <input className='field-input' type="text" name="sender" />
                            </li>
                            <li className='contact-step'>
                                <label className='field-label' for="email">Email address</label>
                                <input className='field-input' type="email" name="email" />
                            </li>
                            <li className='contact-step'>
                                <label className='field-label' for="subject">Subject</label>
                                <input className='field-input' type="text" name="subject"/>
                            </li>
                            <li className='contact-step'>
                                <label className='field-label' for="msg">Message</label>
                                <textarea id='meassage' className='field-input' type="text" name="msg"></textarea>
                            </li>
                        </ol>
                    </fieldset>
                    <p>
                        <button className='form-submit' type="submit">Send Message</button>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact;