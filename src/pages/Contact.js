import React from "react";

const Contact = () => {
  return (
    <div>
      <span>Reach out to me for...</span>
      <span>getting coffee, freelancing, or any other inquiries</span>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <textarea placeholder="Type your message here..."></textarea>
      </form>
      <button>Submit</button>
    </div>
  );
};

export default Contact;
