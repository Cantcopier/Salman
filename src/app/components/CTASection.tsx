import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title,
  description,
  buttonText = "Get Started",
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-red-100 text-lg md:text-xl mb-8 leading-relaxed">
            {description}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-zinc-100 transition-all hover:shadow-xl hover:shadow-black/20 group"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
