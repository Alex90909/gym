import React from 'react';

function Contact(){
  return (
    <div id="contact">
      <h2>Contact us</h2>
      <form action="">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Type Your E-Mail" />
        <textarea placeholder="Write Here..."></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;