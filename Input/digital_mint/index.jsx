import React, { useEffect, useState } from "react";
import "./index.scss";

let reg = /^([1-9]\d*|0)(\.\d*)?$/;
export default function Input({
  children,
  border,
  borderRadius,
  inputVal,
  minVal = 0,
  maxVal = 1,
  inputReg,
  inputStyle,
  onFocus = () => {},
  onBlur = () => {},
  onChange = (e) => {},
  onError = (type) => {},
}) {
  return (
    <div
      className="digitalmint-input-container"
      style={{ border, borderRadius }}
    >
      <div className="digitalmint-input-left">
        {children?.prefix}
        <input
          maxLength={10}
          className="digitalmint-inner-input"
          style={{ ...inputStyle }}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputVal}
          onChange={(e) => {
            let v = e.target.value;
            if ((inputReg || reg).test(v)) {
              if (v > maxVal) {
                onChange(maxVal);
                onError?.("max");
                return;
              }
              onChange(v);
            } else {
              onChange("");
              v != "" && onError?.("error");
            }
          }}
        />
        {children?.endfix}
      </div>
      <div className="digitalmint-input-right">{children?.right}</div>
    </div>
  );
}
