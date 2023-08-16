import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { generateUserID ,event } from "../utils/gtag";
function Product() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const id = uuidv4();
    const userID = generateUserID(); 
  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(`${firstName}`);
    console.log(`${email}`);
    console.log(`${message}`);
    setFirstName("");
    setEmail("");
    setMessage("");
    // const formData = {
    //   firstName: firstName,
    //   email: email,
    //   message: message,
    // };
    
    // Track button click event
    // gtag("event", "button_click", {
    //   event_category: "Button Interaction",
    //   event_label: "Button Clicked",
    //   event_user:'daw1g662hyf'

    //   // event_user: (Math.random() + 1).toString(36).substring(2),
     
    // });
    event({
      action: "button_click",
      category: "Button Interaction",
      label: "Button Clicked",
      // value: 1,
      id: "id",
    });
    // localStorage.setItem("formData", JSON.stringify(formData));
    alert(`record is save  ${firstName} ${email} ${message}`);
  };
  return (
    <div>
      product
      <div className="container">
        Contact Me
        <form onSubmit={handleButtonClick}>
          <div className="form-group">
            <label> Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Product;
