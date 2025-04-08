import React from "react";
import PortfolioHeader from "./PortfolioHeader";
import ProjectShowcase from "./ProjectShowcase";
import FeatureGrid from "./FeatureGrid";

const PortfolioSection: React.FC = () => {
  return (
    <div className="flex flex-col relative min-h-[2693px] overflow-hidden items-center pt-[22px] pb-3 px-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/0d5938d5105feca1954b0b881e1167cc200b8db3?placeholderIfAbsent=true"
        alt="Portfolio background"
        className="absolute h-full w-full object-cover inset-0"
      />

      <div className="relative z-10 w-full max-w-[1728px]">
        <PortfolioHeader />

        <ProjectShowcase
          title="Audio Book"
          subtitle="Saawt App"
          description="Explore and enjoy audiobooks with SAAWT. Customise playback and download for offline listening anytime."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/d5cf429b688dfef271e7beb692d0777c3670c1d0?placeholderIfAbsent=true"
          imageAlt="Saawt App Screenshot"
        />

        <ProjectShowcase
          title="Dating App"
          subtitle="Rahmah App"
          description="Meet your ideal partner in seconds with AI-powered personality insights and secure, moderated chats."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/6a813d54fe33eed4f0a31022d51b1e3ed376d482?placeholderIfAbsent=true"
          imageAlt="Rahmah App Screenshot"
          reverse={true}
          textColor="text-white"
        />

        <ProjectShowcase
          title="Game App"
          subtitle="Seen wa Geem"
          description="Test your knowledge and enjoy answering fun and diverse questions! From sports and history to science and general culture— which field will you excel in?"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/f72f59650b4a48bb2d6ef001716a5fe99e6b5097?placeholderIfAbsent=true"
          imageAlt="Seen wa Geem App Screenshot"
          textColor="text-white"
        />

        <FeatureGrid />
      </div>
    </div>
  );
};

export default PortfolioSection;
