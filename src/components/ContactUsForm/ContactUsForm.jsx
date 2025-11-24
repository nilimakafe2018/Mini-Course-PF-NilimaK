import { useEffect, useState } from "react";
import "./ContactUsForm.css";

function ContactUsForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    //handle form submission function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("Please complete all the fields in the form below.");
            return;
        }

        //successfull form submission
        setSubmitted(true);
        setError("");
        setName("");
        setEmail("");
        setMessage("");
    }

    //hiding message autumatically in 3 second
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
        <div className="contact-container">
            <h1>Send us a message</h1>
            <p>Please provide your full name, email, and message if you have any questions, concerns, comments, or feedback in the from below. We will get back to you as soon as possible.</p>
            <h3>Double check your email address before submitting the form, because that is where we will reply you.</h3>

            {error && <p className="error-msg">{error}</p>}
            {submitted && <p className="success-msg">Message sent successfully.</p>}

            {/* contact form */}
            <form onSubmit={handleSubmit} className="contact-form">
                <label>Full name:
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>Email:
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

                <button type="submit">Send Message</button>

            </form>
        </div>
    )
}

export default ContactUsForm;