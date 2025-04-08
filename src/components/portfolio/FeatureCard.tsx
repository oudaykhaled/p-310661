import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
}) => {
  return (
    <article className="bg-[rgba(144,15,195,1)] shadow-[0px_4px_9px_rgba(12,19,67,1)] self-stretch flex min-w-60 min-h-[316px] flex-col overflow-hidden items-center text-2xl w-[291px] my-auto pt-2.5 pb-[35px] px-2.5 rounded-[40px]">
      <div className="flex min-h-6 w-[17px]"></div>
      <img
        src={iconSrc}
        alt={iconAlt}
        className="aspect-[1] object-contain w-[100px] max-w-full mt-2.5"
      />
      <h3 className="text-white font-bold leading-loose mt-2.5">{title}</h3>
      <p className="text-[rgba(234,218,218,1)] text-[25px] font-light leading-[27px] text-center mt-2.5">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
