import React from "react";
import "./index.scss";

export default function FullLoading({
  bgc = "rgba(255,255,255,0.6)",
  children,
  cb = () => {},
  fulstyle={}
}: any) {
  return (
    <div
      className="fe-full-loading"
      style={{ background: bgc,...fulstyle }}
      id="fullLoading"
      onClick={(e: any) => {
        if (e.target.id == "fullLoading") {
          cb(1);
        }
      }}
    >
      {children}
    </div>
  );
}
