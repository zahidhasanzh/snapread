import React from "react";

const BgGradient = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative isolate ${className ?? ""}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* subtle paper grain across the whole page */}
        <div className="paper-grain absolute inset-0" />
        {/* one restrained marigold glow, like light hitting a highlighted page */}
        <div
          className="absolute -top-24 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "var(--marigold)", opacity: 0.16 }}
        />
        {children}
      </div>
    </div>
  );
};

export default BgGradient;
