import { motion } from "motion/react";
import { Target, Eye, Award, Users, Clock, Shield } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { CTASection } from "../components/CTASection";
import { metadata } from "../../data/metadata";

export function About() {
  const { about } = metadata;

  // Icon mapping for values
  const valueIcons = [Shield, Users, Award, Clock];

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
              subtitle={about.hero.subtitle}
              title={about.hero.title}
              description={about.hero.description}
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
            {about.stats.map((stat, index) => (
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
                src={about.story.image}
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
                subtitle={about.story.subtitle}
                title={about.story.title}
                description={about.story.description}
              />

              <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
                {about.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
                {about.mission.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {about.mission.description}
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
              <h3 className="text-white text-2xl font-bold mb-4">
                {about.vision.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {about.vision.description}
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
            {about.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all group"
                >
                  <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
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
                subtitle={about.team.subtitle}
                title={about.team.title}
                description={about.team.description}
              />

              <div className="mt-6 space-y-4">
                {about.team.highlights.map((highlight, index) => {
                  const Icon = index === 0 ? Award : Users;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-zinc-950 rounded-lg border border-zinc-800"
                    >
                      <div className="bg-red-600/10 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-zinc-400 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={about.team.image}
                alt="Our facility"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={about.cta.title}
        description={about.cta.description}
        buttonText={about.cta.buttonText}
        buttonLink={about.cta.buttonLink}
      />
    </div>
  );
}
