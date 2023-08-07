import React, { useEffect, useState } from "react";
import "./index.scss";

let reg = /^([1-9]\d*|0)(\.\d*)?$/;
export default function Input({
  children,
  border,
  borderRadius,
  inputVal,
  inputReg,
  inputStyle,
  onFocus = () => {},
  onBlur = () => {},
  onChange = (e) => {},
  onError = (type) => {},
}) {
  return (
    <div className="ppdeal-input-container" style={{ border, borderRadius }}>
      <div className="ppdeal-input-left">
        {children?.prefix}
        <input
          maxLength={8}
          className="ppdeal-inner-input"
          style={{ ...inputStyle }}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputVal}
          onChange={(e) => {
            let v = e.target.value;
            onChange(v);
            // if ((inputReg || reg).test(v)) {
            // } else {
            //   onChange("");
            //   v != "" && onError?.("error");
            // }
          }}
        />
        {children?.endfix}
      </div>
      <div className="ppdeal-input-right">{children?.right}</div>
    </div>
  );
}
