import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const formRef = useRef();

  const [formData, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loaderHidden, setHidden] = useState(true);
  const [buttonHidden, setButton] = useState(false);
  const [isTyping, setTyping] = useState(false);
  const [textareaOpen, setText] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    setTyping(true)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setHidden(false);
    setButton(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setHidden(true);
      alert("Message sent successfully!");
      setData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Try again.");
    }
    setButton(false);
  }

  function handleClick(){
    setText(true);
  }

  return (
    <div>
      <div className="form-container">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-box">

            <div className="form-input-box">
              <div className="name-box form-input">
                <label name="Name">Name:</label>
                <input
                  className="name-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Last Name     First Name "
                />
              </div>

              <div className="email-box form-input">
                <label name="email">Email:</label>
                <input
                  className="email-input"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="message-box form-input">
                <label name="Message">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  required
                  onChange={handleChange}
                  placeholder="Write a message"
                  rows={textareaOpen? "6" : "2"}
                  onClick={handleClick}
                />
              </div>
            </div>

            <div hidden={loaderHidden} className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            { isTyping? <button hidden={buttonHidden} id="submit-button" type="submit"> Submit  </button>: null}

          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
