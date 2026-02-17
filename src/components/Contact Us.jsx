import sun from "../assets/sun.svg";

const Contact = () => {
  return (
    <div>
      <div className="flex gap-10 mb-20 items-center">
        <h2 className="bg-green px-2 rounded-xl font-medium">Contact Us</h2>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <form className="bg-gray-300 py-10">
        <div className="flex">
          <input
            type="radio"
            name="message"
            value="Say Hi"
            id="Say Hi"
            className="accent-green"
          />
          <label htmlFor="Say Hi">Say Hi</label>
          <input
            type="radio"
            name="message"
            value="Get a Quote"
            id="Get a Quote"
            className="accent-green"
          />
          <label htmlFor="Get a Quote">Get a Quote</label>
        </div>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Name" className="rounded-xl border" />
      </form>
    </div>
  );
};

export default Contact;
