import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const [zoom , setZoom] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const ContactInfoCard = ({ Icon, title, content }) => (
    <a href={'#'}
      className="flex items-start p-4 border border-gray-200 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition"
    >
      <div className="p-2 bg-indigo-600 text-white rounded-full mr-3 flex-shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </a>
  );




  return (<>
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans my-10 p-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="py-16 mb-12 border-b border-gray-200 text-center ">
        <h1 className="text-4xl font-extrabold mb-4">Let's Start a Conversation</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team is ready to provide swift support. Reach out with any questions.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="w-full lg:w-3/5">

          <h2 className="text-3xl font-semibold mb-4 text-indigo-700">Contact Us</h2>

          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">

            {isSubmitted && (
              <div className="flex items-center bg-green-100 border border-green-400 text-green-700 p-3 rounded mb-4 ">
                <CheckCircle className="mr-2" />
                <span>Message sent! We will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                  placeholder="Order Issue..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none resize-none focus:border-indigo-500"
                  placeholder="Describe your issue..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-700 transition"
              >
                <Send className="inline-block mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info & Map */}
        <div className="w-full lg:w-2/5">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700">Our Details</h2>
          <div className="space-y-4">
            <ContactInfoCard
              Icon={Mail}
              title="Email"
              content="hello@techstore.io"
            />
            <ContactInfoCard
              Icon={Phone}
              title="Phone"
              content="+1 (800) 555-0199"
            />
            <ContactInfoCard
              Icon={Clock}
              title="Hours"
              content="Mon - Fri: 9AM - 6PM"
            />
            <ContactInfoCard
              Icon={MapPin}
              title="Location"
              content="325 Innovation Drive, SF"
            />
          </div>
          {/* Map placeholder */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Find Us</h3>
            <div className="h-64 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
              {/* <p className="text-gray-500">Map Coming Soon</p> */}
              <img onClick={() => setZoom(prev => !prev)} className={`w-full h-full transition-all duration-500 ease-in-out ${zoom ? "scale-105" : "scale-100"} `} src="https://mumbaimap360.com/img/0/mumbai%20-%20bombay-tourist-map.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>  
    </div>
    
    <Footer/>
   
   </>);
};

export default Contact;