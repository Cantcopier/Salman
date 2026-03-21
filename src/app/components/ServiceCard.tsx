import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  index?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all group"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="bg-red-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
          <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-4">{description}</p>
        <Link
          to="/contact"
          className="inline-flex items-center text-red-600 font-medium hover:gap-2 transition-all group/link"
        >
          Learn More
          <span className="inline-block ml-1 group-hover/link:ml-2 transition-all">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
