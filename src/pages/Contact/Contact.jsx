import ContactImage from "../../assets/contact.png";
import ContactDoctor from "../../assets/ContactDoctor.jpg";

const Contact = () => {
  return (
    <div className="bg-base-200">
      <h2 className="text-4xl font-bold font-lora text-center py-10">
        Contact Us
      </h2>
      <p className="text-xl font-normal font-poppins pb-32 text-center">
        Get the answers you need for a healthier you at our medical diagnostic
        center.
      </p>
      <img src={ContactImage} alt="" className="w-full" />
      <div className="grid grid-cols-2 gap-60 p-40">
        <div>
          <img
            className=" w-full rounded-lg h-full"
            src={ContactDoctor}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-2xl font-lora font-bold text-cyan-600 mb-9">
            Ask something...
          </h3>
          <form>
            <h5>Your Name</h5>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <h4>Your Email</h4>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="form-control mb-5">
              <div className="label">
                <h4>Your Message</h4>
              </div>
              <textarea
                className="textarea textarea-bordered h-72"
                placeholder=""
              ></textarea>
              <div className="label"></div>
            </label>
            <button className="btn btn-accent">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
