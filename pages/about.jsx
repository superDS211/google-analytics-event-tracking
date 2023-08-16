import React from "react";
import { event, generateUserID } from "../utils/gtag";

const About = () => {
  const userID = generateUserID(); 
  const handleCart = () => {
    // gtag("event", "add_to_cart", {
    //   event_category: "add_to_cart",
    //   event_label: "add_to_cart",
    //   event_user: "daw1g662hyf",
    // });
    event({
      action: "add_to_cart",
      category: "add_to-cart_Interaction",
      label: " add_to_cart_Interaction",
      // value: 1,
      id: 'id',
    });

    alert("now data will be tracking ");
  };
  return (
    <div className="container">
      <p>here check the more then one event with same id </p>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

export default About;
