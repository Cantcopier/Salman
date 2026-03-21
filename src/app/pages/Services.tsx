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

export function Services() {
  const mainServices = [
    {
      icon: Wrench,
      title: "General Maintenance",
      description:
        "Regular maintenance services including oil changes, fluid checks, filter replacements, and preventive inspections to keep your vehicle running smoothly.",
      image:
        "https://images.unsplash.com/photo-1702146713870-8cdd7ab983fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0MTE1ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Search,
      title: "Computer Diagnostics",
      description:
        "Advanced diagnostic services using state-of-the-art equipment to identify and resolve engine, transmission, and electrical system issues quickly and accurately.",
      image:
        "https://images.unsplash.com/photo-1737493698550-085d3cf55445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXIlMjBzY2FubmVyfGVufDF8fHx8MTc3NDExNTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Droplets,
      title: "Professional Detailing",
      description:
        "Complete interior and exterior detailing services including washing, waxing, polishing, upholstery cleaning, and paint protection to restore your car's showroom shine.",
      image:
        "https://images.unsplash.com/photo-1761934657948-708146148588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzQxMTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Gauge,
      title: "Tire Services",
      description:
        "Complete tire care including new tire installation, rotation, balancing, alignment, and pressure checks. We carry all major tire brands.",
      image:
        "https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwd2hlZWwlMjBzZXJ2aWNlJTIwY2hhbmdlfGVufDF8fHx8MTc3NDExNTg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Battery,
      title: "Battery Service",
      description:
        "Battery testing, replacement, and electrical system diagnostics. We offer premium batteries with warranty and professional installation.",
      image:
        "https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5JTIwZWxlY3RyaWNhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzc0MTE1ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Wind,
      title: "AC & Heating",
      description:
        "Climate control system repair and maintenance including AC recharge, heating system repair, and cabin filter replacement for optimal comfort.",
    },
    {
      icon: Cog,
      title: "Transmission Service",
      description:
        "Transmission fluid changes, repairs, and complete rebuilds. Expert service for both automatic and manual transmissions.",
    },
    {
      icon: Zap,
      title: "Engine Repair",
      description:
        "Complete engine diagnostics and repair services from minor tune-ups to major overhauls. We handle all makes and models.",
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Brake Service",
      description: "Brake inspection, pad replacement, rotor resurfacing",
    },
    {
      icon: Paintbrush,
      title: "Paint Correction",
      description: "Scratch removal, paint touch-ups, ceramic coating",
    },
    {
      icon: Settings,
      title: "Suspension Work",
      description: "Shock and strut replacement, alignment services",
    },
    {
      icon: CheckCircle,
      title: "Pre-Purchase Inspection",
      description: "Comprehensive vehicle inspection before buying",
    },
  ];

  const whyChooseOur = [
    "Certified ASE technicians with years of experience",
    "State-of-the-art diagnostic equipment and tools",
    "High-quality OEM and aftermarket parts",
    "Transparent pricing with detailed estimates",
    "Warranty on all parts and labor",
    "Fast turnaround times without compromising quality",
    "Shuttle service and loaner vehicles available",
    "Online appointment scheduling and service tracking",
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
              subtitle="Our Services"
              title="Comprehensive Automotive Care"
              description="From routine maintenance to major repairs, we provide complete automotive services to keep your vehicle running at peak performance."
              centered
            />
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
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
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all group"
              >
                <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <service.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
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
                subtitle="Service Excellence"
                title="Why Choose Our Services?"
                description="We're committed to delivering the highest quality automotive services with transparency and care."
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseOur.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{item}</span>
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
                Service Process
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Book Appointment",
                    description:
                      "Schedule online or call us to book your service",
                  },
                  {
                    step: "02",
                    title: "Drop Off Vehicle",
                    description: "Bring your car to our facility at your time",
                  },
                  {
                    step: "03",
                    title: "Inspection & Estimate",
                    description:
                      "We inspect your vehicle and provide a detailed estimate",
                  },
                  {
                    step: "04",
                    title: "Service & Repair",
                    description: "Our experts perform the approved services",
                  },
                  {
                    step: "05",
                    title: "Quality Check",
                    description:
                      "Thorough inspection to ensure everything is perfect",
                  },
                  {
                    step: "06",
                    title: "Pick Up",
                    description: "Collect your vehicle and enjoy the ride",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-red-600 font-bold text-xl shrink-0">
                      {step.step}
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
              Transparent Pricing
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We believe in honest, upfront pricing. Every service includes a
              detailed estimate before we begin work. No hidden fees, no
              surprises. We'll always communicate with you about any additional
              work needed and get your approval first.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-zinc-900 px-6 py-3 rounded-lg border border-zinc-800">
                <div className="text-red-600 font-bold">Free</div>
                <div className="text-zinc-400 text-sm">Estimates</div>
              </div>
              <div className="bg-zinc-900 px-6 py-3 rounded-lg border border-zinc-800">
                <div className="text-red-600 font-bold">12 Months</div>
                <div className="text-zinc-400 text-sm">Labor Warranty</div>
              </div>
              <div className="bg-zinc-900 px-6 py-3 rounded-lg border border-zinc-800">
                <div className="text-red-600 font-bold">24/7</div>
                <div className="text-zinc-400 text-sm">Emergency Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Service Your Vehicle?"
        description="Book your appointment today and experience professional automotive care that exceeds expectations."
        buttonText="Schedule Service Now"
      />
    </div>
  );
}
