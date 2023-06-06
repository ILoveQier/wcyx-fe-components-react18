import React, { useEffect, useState } from "react";
import "./index.scss";
export default function Progress({
  amount = 0,
  total = 100,
  height = 20,
  bgc = "#abc",
  finishedBgc = "#765393",
  children,
}) {
  const [ratio, setRatio] = useState(5);
  useEffect(() => {
    let rat = (amount > 100 ? 100 : amount) / total;
    setRatio(rat);
    return () => {};
  }, [amount]);

  return (
    <div
      className="digitalmint-progress-container"
      style={{ background: bgc, height }}
    >
      <div className="digitalmint-progress-start">{children.start}</div>
      <div
        className="digitalmint-progress-finished"
        style={{ width: `${ratio * 100}%`, backgroundColor: finishedBgc }}
      ></div>
      <div
        className="digitalmint-progress-middle"
        style={{ left: `${ratio * 100}%` }}
      >
        {children.middle}
      </div>
      <div className="digitalmint-progress-end">{children.end}</div>
    </div>
  );
}
