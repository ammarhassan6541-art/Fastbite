import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+92 313-7506054", "+92 343-6541891"],
      description: "Available 24/7 for orders & inquiries",
      color: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-500",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["ammar@gmail.com", "orders@fastbite.com"],
      description: "Response within 2 hours",
      color: "bg-green-50 border-green-100",
      iconColor: "text-green-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: ["123 Food Street, Lahore", "456 Burger Avenue, Lahore"],
      description: "Multiple locations nationwide",
      color: "bg-red-50 border-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Opening Hours",
      details: ["Mon-Sun: 8:00 AM - 2:00 AM", "Delivery: 24/7"],
      description: "Extended hours on weekends",
      color: "bg-yellow-50 border-yellow-100",
      iconColor: "text-yellow-500",
    },
  ];

  const franchiseOptions = [
    "New York - Manhattan",
    "Chicago - Downtown",
    "Los Angeles - Hollywood",
    "Miami - South Beach",
    "Houston - Downtown",
    "Boston - Back Bay",
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", color: "bg-blue-600 hover:bg-blue-700", link: "https://www.facebook.com/ammar.hassan.769102" },
    { icon: <FaTwitter />, name: "Twitter", color: "bg-sky-500 hover:bg-sky-600", link: "https://www.instagram.com/ammarhassan6541/" },
    { icon: <FaInstagram />, name: "Instagram", color: "bg-pink-600 hover:bg-pink-700", link: "https://www.instagram.com/ammarhassan6541/" },
    { icon: <FaWhatsapp />, name: "WhatsApp", color: "bg-green-500 hover:bg-green-600", link: "https://api.whatsapp.com/send?phone=923436541891&text=Hello%20I%20want%20to%20order" },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
            <FaEnvelope className="text-sm" />
            <span className="font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-yellow-500">FastBite</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions, feedback, or want to franchise? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div>
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`${info.color} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${info.iconColor} p-3 rounded-xl bg-white shadow-sm`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 font-medium">{detail}</p>
                      ))}
                      <p className="text-gray-500 text-sm mt-2">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105`}
                  >
                    {social.icon}
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
              <p className="text-gray-600">
                Stay updated with our latest offers, new menu items, and exclusive deals!
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting FastBite. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Full Name..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="example@.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="+92 312-3456789"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="career">Career Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formData.subject === "franchise" && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Location for Franchise
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                      <option value="">Select a location</option>
                      {franchiseOptions.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-yellow-500 rounded focus:ring-yellow-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-gray-600">
                    Subscribe to our newsletter for exclusive offers
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 ${isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    } text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Quick Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Need Immediate Help?</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=923436541891&text=Hello%20I%20want%20to%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-50 text-green-700 p-4 rounded-xl text-center font-semibold hover:bg-green-100 transition-colors"
                >
                  <FaWhatsapp className="inline mr-2 text-lg" />
                  WhatsApp Chat
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+923310168702"
                  className="flex-1 bg-blue-50 text-blue-700 p-4 rounded-xl text-center font-semibold hover:bg-blue-100 transition-colors"
                >
                  <FaPhone className="inline mr-2 text-lg" />
                  Call Now
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Map Location */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Our Locations</h3>
            <div className="h-64 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Map Coming Soon</h4>
                <p className="text-gray-600">We're working on adding our store locations map here.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yellow-500">50+</div>
                <div className="text-gray-700">Cities Nationwide</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yellow-500">24/7</div>
                <div className="text-gray-700">Delivery Service</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-yellow-500">30min</div>
                <div className="text-gray-700">Average Delivery Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What are your delivery hours?",
                a: "We deliver 24/7! Day or night, we're here to satisfy your cravings."
              },
              {
                q: "Do you offer catering for events?",
                a: "Yes! We provide catering services for events of all sizes. Contact us for custom menus."
              },
              {
                q: "How can I track my order?",
                a: "Once your order is confirmed, you'll receive a tracking link via SMS and email."
              },
              {
                q: "Are there vegetarian options?",
                a: "Absolutely! We have a wide range of vegetarian and vegan options on our menu."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery."
              },
              {
                q: "How do I apply for a franchise?",
                a: "Select 'Franchise Opportunity' in the contact form above and we'll guide you through the process."
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-yellow-300 transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-yellow-100 text-yellow-700 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-sm">
                    Q
                  </span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 ml-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}