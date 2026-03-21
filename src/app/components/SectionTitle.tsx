interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {subtitle && (
        <div className="flex items-center gap-2 mb-3">
          {centered && <div className="flex-1 h-px bg-red-600/20" />}
          <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">
            {subtitle}
          </span>
          {centered && <div className="flex-1 h-px bg-red-600/20" />}
        </div>
      )}
      <h2
        className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          centered ? "mx-auto max-w-3xl" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-zinc-400 text-lg leading-relaxed ${
            centered ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
