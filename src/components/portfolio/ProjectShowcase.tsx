import React from "react";

interface ProjectShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  textColor?: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  textColor = "text-[rgba(75,15,147,1)]",
}) => {
  const textColorClass = textColor || "text-[rgba(75,15,147,1)]";
  const descriptionColorClass =
    textColor === "text-white" ? "text-white" : "text-[rgba(70,64,64,1)]";

  const content = (
    <div
      className={`min-w-60 overflow-hidden ${reverse ? "text-right" : ""} ${textColor === "text-white" ? "text-white" : ""}`}
    >
      <div className={`text-[40px] font-light ${textColorClass}`}>{title}</div>
      <div
        className={`text-[64px] mt-[17px] max-md:text-[40px] ${textColorClass}`}
      >
        {subtitle}
      </div>
      <div className={`text-[28px] mt-[17px] ${descriptionColorClass}`}>
        {description}
      </div>
    </div>
  );

  const image = (
    <img
      src={imageSrc}
      alt={imageAlt}
      className="object-contain min-w-60 max-md:max-w-full"
    />
  );

  return (
    <section className="relative flex w-full items-center gap-[40px] overflow-hidden justify-center flex-wrap p-2.5 my-8 max-md:max-w-full">
      {reverse ? (
        <>
          {content}
          <div className="flex-grow"></div>
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </section>
  );
};

export default ProjectShowcase;
