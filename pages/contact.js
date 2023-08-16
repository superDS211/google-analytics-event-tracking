import React from 'react'
import { event, generateUserID } from '../utils/gtag';

const Contact = () => {
  const userID = generateUserID(); 
  const handleCart = () => {
    // gtag("event", "add_to_cart", {
    //   event_category: "add_to_cart",
    //   event_label: "add_to_cart",
    //   event_user: "daw1g662hyf",
    // });
    event({
      action: "contact_click",
      category: "contact Interaction",
      label: "contact Clicked",
      id: 'id',
    });
    alert("now data will be tracking ");
  };
  return (
    <div className="container">
    <p>here check the more then one event with same id </p>
    <button onClick={handleCart}>Add to contact</button>
  </div>
  )
}

export default Contact