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
  onFocus,
  onBlur,
  onChange,
  onError
}) {
  return (
    <div className="digitalmint-input-container" style={{ border, borderRadius }}>
      <div className="digitalmint-input-left">
        {children?.prefix}
        <input
          maxLength={15}
          className="digitalmint-inner-input"
          style={{ ...inputStyle }}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputVal}
          onChange={(e) => {
            let v = e.target.value;
            if ((inputReg || reg).test(v)) {
              onChange(v);
            } else {
              onError?.();
            }
          }}
        />
        {children?.endfix}
      </div>
      <div className="digitalmint-input-right">{children?.right}</div>
    </div>
  );
}
