import React from "react";
import "./index.scss";

export default function FullLoading({
  bgc = "rgba(255,255,255,0.6)",
  children,
  id='fullLoading',
  cb = () => {},
}: any) {
  return (
    <div
      className="fe-full-loading"
      style={{ background: bgc }}
      id={id}
      onClick={(e: any) => {
        if (e.target.id == id) {
          cb(1);
        }
      }}
    >
      {children}
    </div>
  );
}
