import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subdetails: "Mon-Fri: 8AM - 6PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@autopro.com",
      subdetails: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Auto Street",
      subdetails: "Car City, CC 12345",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM - 6PM",
      subdetails: "Sat: 9AM - 4PM, Sun: Closed",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <SectionTitle
              subtitle="Contact Us"
              title="Get in Touch"
              description="Have questions or ready to book your service? We're here to help. Reach out to us and we'll get back to you as soon as possible."
              centered
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all group"
              >
                <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <info.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                <p className="text-zinc-300 text-sm mb-1">{info.details}</p>
                <p className="text-zinc-500 text-xs">{info.subdetails}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <h3 className="text-white text-2xl font-bold mb-6">
                  Send us a Message
                </h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-600/10 border border-green-600/50 text-green-600 p-4 rounded-lg mb-6"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-zinc-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-zinc-300 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-zinc-300 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="maintenance">General Maintenance</option>
                      <option value="diagnostics">Computer Diagnostics</option>
                      <option value="detailing">Auto Detailing</option>
                      <option value="tires">Tire Service</option>
                      <option value="battery">Battery Service</option>
                      <option value="ac">AC & Heating</option>
                      <option value="transmission">Transmission Service</option>
                      <option value="engine">Engine Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-zinc-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your vehicle and what service you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden h-[400px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <p className="text-zinc-400">Map Location</p>
                    <p className="text-zinc-500 text-sm mt-2">
                      123 Auto Street, Car City, CC 12345
                    </p>
                  </div>
                </div>
                {/* You can integrate Google Maps or similar here */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm" />
              </div>

              {/* Additional Contact Info */}
              <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <h3 className="text-white text-xl font-bold mb-4">
                  Visit Our Facility
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Stop by our modern facility for a tour or to speak with our
                  team. We have a comfortable waiting area with complimentary
                  WiFi and refreshments.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        Business Hours
                      </p>
                      <p className="text-zinc-400 text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-zinc-400 text-sm">
                        Saturday: 9:00 AM - 4:00 PM
                      </p>
                      <p className="text-zinc-400 text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        24/7 Emergency Service
                      </p>
                      <p className="text-zinc-400 text-sm">
                        For urgent roadside assistance, call our emergency line
                        at (555) 999-8888
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
            centered
          />

          <div className="mt-12 space-y-4">
            {[
              {
                question: "Do I need an appointment?",
                answer:
                  "While walk-ins are welcome, we recommend scheduling an appointment to minimize wait times and ensure we have the right technician available for your needs.",
              },
              {
                question: "What forms of payment do you accept?",
                answer:
                  "We accept all major credit cards, debit cards, cash, and checks. We also offer financing options for larger repairs.",
              },
              {
                question: "Do you offer warranties?",
                answer:
                  "Yes! We provide a 12-month/12,000-mile warranty on labor and parts warranty based on manufacturer specifications.",
              },
              {
                question: "How long will my service take?",
                answer:
                  "Service times vary depending on the work needed. We'll provide an estimated completion time when you drop off your vehicle. For longer jobs, we offer loaner vehicles.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 p-6 rounded-xl border border-zinc-800"
              >
                <h4 className="text-white font-semibold mb-2">
                  {faq.question}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
