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

export function Home() {
  const services = [
    {
      icon: Wrench,
      title: "Car Maintenance",
      description:
        "Regular maintenance to keep your vehicle running smoothly and efficiently.",
      image:
        "https://images.unsplash.com/photo-1702146713870-8cdd7ab983fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0MTE1ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Search,
      title: "Diagnostics",
      description:
        "Advanced computer diagnostics to identify and resolve issues quickly.",
      image:
        "https://images.unsplash.com/photo-1737493698550-085d3cf55445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXIlMjBzY2FubmVyfGVufDF8fHx8MTc3NDExNTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Droplets,
      title: "Auto Detailing",
      description:
        "Professional detailing services to make your car look brand new.",
      image:
        "https://images.unsplash.com/photo-1761934657948-708146148588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzQxMTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Gauge,
      title: "Tire Service",
      description:
        "Complete tire services including replacement, rotation, and balancing.",
      image:
        "https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwd2hlZWwlMjBzZXJ2aWNlJTIwY2hhbmdlfGVufDF8fHx8MTc3NDExNTg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all services",
    },
  ];

  const testimonials = [
    {
      name: "John Davis",
      role: "Business Owner",
      content:
        "AutoPro has been servicing my fleet for 3 years. Their professionalism and attention to detail is unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Miller",
      role: "Regular Customer",
      content:
        "Best auto service in town! They always explain everything clearly and the work is top-notch.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "Car Enthusiast",
      content:
        "I trust AutoPro with my luxury vehicles. They treat every car like it's their own.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1760688962025-e56c8022daf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBmcm9udCUyMHZpZXclMjBkYXJrfGVufDF8fHx8MTc3NDExNTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
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
                Premium Auto Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your Car Deserves
              <br />
              <span className="text-red-600">Expert Care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed"
            >
              Professional automotive maintenance and repair services you can
              trust. We keep your vehicle running at peak performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-600/20 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-lg font-semibold hover:bg-zinc-100 transition-all hover:shadow-xl"
              >
                Book Appointment
              </Link>
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
            subtitle="What We Offer"
            title="Our Premium Services"
            description="From routine maintenance to specialized repairs, we provide comprehensive automotive services to keep your vehicle in top condition."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all group"
            >
              View All Services
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
                subtitle="Why Choose Us"
                title="Excellence in Automotive Care"
                description="We combine expertise, quality, and customer service to deliver the best automotive experience."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Certified and experienced technicians",
                  "State-of-the-art diagnostic equipment",
                  "Transparent pricing with no hidden fees",
                  "Quality parts and warranties",
                  "Fast and efficient service",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all group"
              >
                Learn More About Us
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
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all"
                >
                  <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from our satisfied customers."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
        title="Ready to Get Started?"
        description="Book your appointment today and experience the AutoPro difference. Your car deserves the best care."
        buttonText="Book Appointment Now"
      />
    </div>
  );
}
