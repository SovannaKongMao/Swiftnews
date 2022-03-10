import React, { useState } from "react";
import emailjs from "emailjs-com";


import AppLayout from "../layouts/appLayout";

const Result = () => {
    return (
        <p>Your message has been successfully sent!!!</p>
    )
}

function ContactPage(props) {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_al1x8ff", "template_fytu6ua", e.target, "V9U_AHOfCZtLoUF2D")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);
    };
    setTimeout(() => {
        showResult(false)
    }, 5000);

    return (
        <AppLayout>

            <form action="" onSubmit={sendEmail}>
                <div className="formWord">
                    <h2>Say Hello!</h2>
                    <span>Full Name</span>
                    <br />
                    <input className="input100" type="text" name="fullName" required />
                    <br />
                    <span>Phone Number</span>
                    <br />
                    <input className="input100" type="text" name="phone" required />
                    <br />
                    <span>Enter Email</span>
                    <br />
                    <input className="input100" type="text" name="email" required />
                </div>
                <div className="formWord">
                    <span>Message</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
                    <button> SUBMIT</button>
                    <div className="row">
                        {result ? <Result /> : null}
                    </div>
                </div>
            </form>

        </AppLayout>
    )
}

export default ContactPage;