import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Your Message"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br /><br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Contact;