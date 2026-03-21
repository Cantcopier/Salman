import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Wrench,
  Search,
  Droplets,
  Gauge,
  Users,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { SectionTitle } from "../components/SectionTitle";
import { CTASection } from "../components/CTASection";
import { metadata } from "../../data/metadata";

export function Home() {
  const { home } = metadata;

  // Icon mapping for services
  const serviceIcons = [Wrench, Search, Droplets, Gauge];
  const featureIcons = [Users, Clock, Shield];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={home.hero.image}
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-12 bg-red-600" />
              <span className="text-red-600 font-semibold tracking-wider uppercase">
                {home.hero.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {home.hero.title}
              <br />
              <span className="text-red-600">{home.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed"
            >
              {home.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {home.hero.buttons.map((button, index) => (
                <Link
                  key={index}
                  to={button.link}
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${
                    button.primary
                      ? "bg-red-600 text-white hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20"
                      : "bg-white text-zinc-900 hover:bg-zinc-100 hover:shadow-xl"
                  } group`}
                >
                  {button.text}
                  {button.primary && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle={home.servicesSection.subtitle}
            title={home.servicesSection.title}
            description={home.servicesSection.description}
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={serviceIcons[index]}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to={home.servicesSection.viewAllLink}
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all group"
            >
              {home.servicesSection.viewAllText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle={home.whyChooseUs.subtitle}
                title={home.whyChooseUs.title}
                description={home.whyChooseUs.description}
              />

              <div className="mt-8 space-y-4">
                {home.whyChooseUs.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to={home.whyChooseUs.ctaLink}
                className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all group"
              >
                {home.whyChooseUs.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {home.features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all"
                  >
                    <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle={home.testimonials.subtitle}
            title={home.testimonials.title}
            description={home.testimonials.description}
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-red-600 text-red-600"
                    />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={home.cta.title}
        description={home.cta.description}
        buttonText={home.cta.buttonText}
        buttonLink={home.cta.buttonLink}
      />
    </div>
  );
}
