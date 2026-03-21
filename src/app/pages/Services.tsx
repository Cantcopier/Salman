import { motion } from "motion/react";
import {
  Wrench,
  Search,
  Droplets,
  Gauge,
  Battery,
  Wind,
  Cog,
  Zap,
  Shield,
  Paintbrush,
  Settings,
  CheckCircle,
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { SectionTitle } from "../components/SectionTitle";
import { CTASection } from "../components/CTASection";
import { metadata } from "../../data/metadata";

export function Services() {
  const { services } = metadata;

  // Icon mapping for main services
  const mainServiceIcons = [Wrench, Search, Droplets, Gauge, Battery, Wind, Cog, Zap];
  
  // Icon mapping for additional services
  const additionalServiceIcons = [Shield, Paintbrush, Settings, CheckCircle];

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
              subtitle={services.hero.subtitle}
              title={services.hero.title}
              description={services.hero.description}
              centered
            />
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={mainServiceIcons[index]}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="More Services"
            title="Additional Automotive Solutions"
            description="We offer a full range of services to meet all your vehicle needs."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.additionalServices.map((service, index) => {
              const Icon = additionalServiceIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all group"
                >
                  <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle={services.whyChoose.subtitle}
                title={services.whyChoose.title}
                description={services.whyChoose.description}
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.whyChoose.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
            >
              <h3 className="text-white text-2xl font-bold mb-6">
                {services.process.title}
              </h3>

              <div className="space-y-6">
                {services.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-red-600 font-bold text-xl shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {step.title}
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 text-center"
          >
            <h3 className="text-white text-2xl font-bold mb-4">
              {services.pricing.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              {services.pricing.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {services.pricing.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 px-6 py-3 rounded-lg border border-zinc-800"
                >
                  <div className="text-red-600 font-bold">{feature.label}</div>
                  <div className="text-zinc-400 text-sm">{feature.sublabel}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={services.cta.title}
        description={services.cta.description}
        buttonText={services.cta.buttonText}
        buttonLink={services.cta.buttonLink}
      />
    </div>
  );
}
