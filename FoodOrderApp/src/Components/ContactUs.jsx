const ContactUs = () => {
  return (
    <form>
      <h1>Contact Us</h1>

      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;
