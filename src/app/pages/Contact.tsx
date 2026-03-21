import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { metadata } from "../../data/metadata";

export function Contact() {
  const { contact } = metadata;

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

  // Icon mapping for contact info
  const iconMap: Record<string, any> = {
    phone: Phone,
    email: Mail,
    address: MapPin,
    hours: Clock,
  };

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
              subtitle={contact.hero.subtitle}
              title={contact.hero.title}
              description={contact.hero.description}
              centered
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contact.info.map((info, index) => {
              const Icon = iconMap[info.type];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all group"
                >
                  <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {info.title}
                  </h3>
                  <p className="text-zinc-300 text-sm mb-1">{info.details}</p>
                  <p className="text-zinc-500 text-xs">{info.subdetails}</p>
                </motion.div>
              );
            })}
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
                  {contact.form.title}
                </h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-600/10 border border-green-600/50 text-green-600 p-4 rounded-lg mb-6"
                  >
                    {contact.form.successMessage}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-zinc-300 mb-2">
                      {contact.form.fields.name.label}{" "}
                      {contact.form.fields.name.required && "*"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required={contact.form.fields.name.required}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                      placeholder={contact.form.fields.name.placeholder}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-zinc-300 mb-2"
                      >
                        {contact.form.fields.email.label}{" "}
                        {contact.form.fields.email.required && "*"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={contact.form.fields.email.required}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        placeholder={contact.form.fields.email.placeholder}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-zinc-300 mb-2"
                      >
                        {contact.form.fields.phone.label}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        placeholder={contact.form.fields.phone.placeholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-zinc-300 mb-2"
                    >
                      {contact.form.fields.service.label}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
                    >
                      {contact.form.fields.service.options?.map(
                        (option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-zinc-300 mb-2"
                    >
                      {contact.form.fields.message.label}{" "}
                      {contact.form.fields.message.required && "*"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required={contact.form.fields.message.required}
                      rows={5}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors resize-none"
                      placeholder={contact.form.fields.message.placeholder}
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
                        {contact.form.submittingButton}
                      </>
                    ) : (
                      <>
                        {contact.form.submitButton}
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
                      {metadata.footer.contact.address}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm" />
              </div>

              {/* Additional Contact Info */}
              <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <h3 className="text-white text-xl font-bold mb-4">
                  {contact.visitInfo.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {contact.visitInfo.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {contact.businessHours.title}
                      </p>
                      {contact.businessHours.schedule.map((item, index) => (
                        <p key={index} className="text-zinc-400 text-sm">
                          {item.days}: {item.hours}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {contact.emergency.title}
                      </p>
                      <p className="text-zinc-400 text-sm">
                        {contact.emergency.description}
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
            subtitle={contact.faq.subtitle}
            title={contact.faq.title}
            centered
          />

          <div className="mt-12 space-y-4">
            {contact.faq.items.map((faq, index) => (
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
