import React, { useState, useEffect } from "react";
import "./tabswitch.scss";
export default function TabSwitch({
  items,
  itemStyle = {},
  isFit = false,
  clickCallBack = (e) => {},
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLefts, setActiveLefts] = useState([]);
  const [activeWidths, setActiveWidths] = useState([]);
  useEffect(() => {
    if (isFit) {
      let doms = document.querySelectorAll(".tab-item");
      let leftArr = [0];
      let widthArr = [];
      doms.forEach((d) => {
        leftArr.push(d.clientWidth + d.offsetLeft - 5);
        widthArr.push(d.clientWidth);
      });
      setActiveLefts(leftArr);
      setActiveWidths(widthArr);
    }
    return () => {};
  }, [isFit]);
  return (
    <div className="tabswitch-container">
      {items.map((item, i) => {
        return (
          <div
            key={i}
            className="tab-item"
            style={{ ...itemStyle, width: isFit ? "fit-content" : 120 }}
            onClick={(e) => {
              setActiveIndex(i);
              clickCallBack(i);
            }}
          >
            {item}
          </div>
        );
      })}
      <div
        className="active"
        style={{
          left: `${
            isFit
              ? (activeLefts[activeIndex] || 0) + 5
              : activeIndex * (itemStyle.width ? itemStyle.width : 120) + 5
          }px`,
          width: `${
            isFit ? activeWidths[activeIndex] + "px" : itemStyle.width + "px"
          }`,
          height: itemStyle.height + "px",
        }}
      ></div>
    </div>
  );
}
