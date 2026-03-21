import { motion } from "motion/react";
import { Target, Eye, Award, Users, Clock, Shield } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { CTASection } from "../components/CTASection";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description:
        "We never compromise on quality. Every service meets our highest standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We listen and deliver personalized service.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Continuous improvement and expert craftsmanship in everything we do.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Dependable service you can count on, delivered on time, every time.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10K+", label: "Happy Customers" },
    { number: "50+", label: "Expert Technicians" },
    { number: "98%", label: "Customer Satisfaction" },
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
              subtitle="About Us"
              title="Leading the Way in Automotive Excellence"
              description="For over 15 years, AutoPro has been the trusted choice for professional automotive services, combining expertise, quality, and customer care."
              centered
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-zinc-900 p-6 rounded-xl border border-zinc-800"
              >
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1759655360665-13a456981d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzc0MTE1ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Our Story"
                title="Built on Passion and Expertise"
                description="What started as a small family garage has grown into the region's most trusted automotive service center."
              />

              <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Founded in 2010, AutoPro was born from a simple mission: to
                  provide honest, quality automotive services that car owners
                  can truly rely on. Our founder, a third-generation mechanic,
                  saw the need for a service center that combined cutting-edge
                  technology with old-school craftsmanship.
                </p>
                <p>
                  Today, we've grown to a team of over 50 certified technicians,
                  but we've never lost sight of our core values. Every vehicle
                  that comes through our doors receives the same meticulous care
                  and attention to detail that built our reputation.
                </p>
                <p>
                  We invest in the latest diagnostic equipment and continuous
                  training for our team, ensuring we can handle everything from
                  routine maintenance to complex repairs on all makes and models.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800"
            >
              <div className="bg-red-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                To provide exceptional automotive services that exceed customer
                expectations through expert craftsmanship, transparent
                communication, and unwavering commitment to quality. We strive
                to be the automotive partner our customers trust and recommend.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800"
            >
              <div className="bg-red-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                To be recognized as the leading automotive service provider,
                setting industry standards for quality, innovation, and customer
                care. We envision a future where every car owner has access to
                honest, professional service they can depend on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Values"
            title="The Principles That Guide Us"
            description="These core values shape every decision we make and every service we provide."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all group"
              >
                <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <value.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                subtitle="Our Team"
                title="Expert Technicians You Can Trust"
                description="Our team of certified professionals brings decades of combined experience and a passion for automotive excellence."
              />

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                  <div className="bg-red-600/10 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      ASE Certified
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      All our technicians are ASE certified and regularly
                      trained on the latest automotive technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                  <div className="bg-red-600/10 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Continuous Training
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      We invest in ongoing education to stay ahead of industry
                      developments and new vehicle technologies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1765603729821-804d347a3680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3Mzk5NDUxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our facility"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience the AutoPro Difference"
        description="Join thousands of satisfied customers who trust us with their vehicles. Schedule your service today."
        buttonText="Get in Touch"
      />
    </div>
  );
}
