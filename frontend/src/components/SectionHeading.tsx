interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mt-4 mx-auto">{subtitle}</p>}
      <div className={`mt-4 h-1 w-16 rounded-full accent-gradient ${center ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
