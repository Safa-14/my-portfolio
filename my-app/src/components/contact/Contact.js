import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

// const Result = () => {
//   return (
//     <p>Your Message has been successfully sent. I will contact you soon.</p>
//   );
// };
function Contact() {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwen33q",
        "template_4dkpmz7",
        form.current,
        "f7pv3aTdvFI1IP9x1"
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert('Message successfully sent!')
          showResult(true);
          // window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          showResult(false);
          // alert('Failed to send the message, please try again')
        }
      );

    e.currentTarget.reset();
    // showResult(true);
  };

  // hide result
  setTimeout(() => {
    showResult(false);
  }, 10000);

  const ShowContactMessage = (e) => {
    console.log(e);
    e.currentTarget.firstChild.style.height = "150px";
    e.currentTarget.firstChild.style.top = "110px";
  };

  return (
    <section id="contact">
      <div className="container contact_container">
        {/* <div className="contact_content"> */}
        <div id="form-wrap" onClick={ShowContactMessage}>
          <div className="left">Be Free to write Me a Message!</div>
        </div>
        {/* <div className="right"> */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            cols="30"
            rows="10"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn sendBtn">
            SEND MESSAGE
          </button>

          {/* /*Message showed when the message is send */}
          <div>
            {result ? (
              <p>
                Your Message has been successfully sent. I will contact you
                soon.
              </p>
            ) : (
              null
            )}
          </div>
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Contact;
