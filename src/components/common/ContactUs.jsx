import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-600 text-center uppercase pb-3 md:pb-5">
        Get In Touch
      </h1>
      <p className="px-4 md:px-28 lg:px-48 pb-4 md:pb-12 text-center">
        Looking to explore how IoT can transform your business? Get in touch
        with us today and start your journey towards smarter, more efficient
        solutions. Our team is ready to assist with customized IoT solutions
        that meet your unique needs and drive your success.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h2> */}
          <form className="space-y-6">
            <div>
              {/* <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label> */}
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label> */}
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              {/* <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Number
              </label> */}
              <input
                type="tel"
                id="mobile"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                placeholder="Your Number"
              />
            </div>
            <div>
              {/* <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label> */}
              <textarea
                id="message"
                rows={4}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 text-center">
            Contact Details
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <div className="">
                <p className="text-gray-700 font-medium">Phone</p>
                <a
                  href="tel:+917065650148"
                  className="text-gray-600 hover:text-blue-600"
                >
                  +91 7065650137
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div className="">
                <p className="text-gray-700 font-medium">Email</p>
                <a
                  href="mailto:info@iotautohub.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  info@iotautohub.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div className="">
                <p className="text-gray-700 font-medium">Address</p>
                <p className="text-gray-600">
                  Office : 306-IN-25/34-E, East Patel Nagar,
                  <br /> Central Delhi, New Delhi,
                  <br />
                  Delhi - 110008, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
