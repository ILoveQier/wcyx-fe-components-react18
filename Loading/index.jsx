import React from "react";
import "./index.scss";

export default function FullLoading({ bgc = "rgba(255,255,255,0.3)",children }) {
  return (
    <div className="fe-full-loading" style={{ background: bgc }}>
      {children}
    </div>
  );
}
