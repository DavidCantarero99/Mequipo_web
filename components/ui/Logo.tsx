import React from "react";

export const Logo: React.FC<{ className?: string }> = ({ className = "size-8" }) => (
  <img
    src="https://res.cloudinary.com/dwikid1wv/image/upload/v1770995303/meequipo_landscape_kncz3k.svg"
    alt="Logo MEQUIPO"
    className={className}
  />
);