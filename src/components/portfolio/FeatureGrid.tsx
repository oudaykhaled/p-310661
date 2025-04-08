import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "Responsive",
      description: "Optimized for all screen sizes and devices.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/7bc87f7ebeba20003543aca03cec26f0afe1e010?placeholderIfAbsent=true",
      iconAlt: "Responsive icon",
    },
    {
      title: "Customizable",
      description: "Easily modify and personalize your design.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/5264beebca927a687c6945e1cc9cd3cc408a3076?placeholderIfAbsent=true",
      iconAlt: "Customizable icon",
    },
    {
      title: "Powerful",
      description: "Strong backend ensuring performance & security.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/b38bd1066503e4d681e1c48155ef5dbb788f42dc?placeholderIfAbsent=true",
      iconAlt: "Powerful icon",
    },
    {
      title: "Support",
      description: "24/7 assistance whenever you need it.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/b0cd8a0bc1a5f0492baeef7e4c424bcb84fc04f5?placeholderIfAbsent=true",
      iconAlt: "Support icon",
    },
  ];

  return (
    <section className="relative flex items-center gap-2.5 overflow-hidden flex-wrap mt-[18px] p-2.5 max-md:max-w-full justify-center">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          iconSrc={feature.iconSrc}
          iconAlt={feature.iconAlt}
        />
      ))}
    </section>
  );
};

export default FeatureGrid;
