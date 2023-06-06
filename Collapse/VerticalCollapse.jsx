import React, { useState, useEffect } from "react";
import "./vc.scss";

export default function VerticalCollapse({
  items = [],
  bgc = "#fff",
  firstOpen = 0,
  canOpenAll = false,
  canCollapse = false,
  needArrow = true,
  arrowColor = "",
  arrowType = "",
  children = {},
}) {
  const [activeIndexs, setactiveIndexs] = useState([firstOpen]);

  return (
    <div className="vc-container">
      {items.map((item, i) => {
        return (
          <div className="item-wrap" key={i} style={{ background: bgc }}>
            <div
              className="item-title"
              onClick={(e) => {
                if (canCollapse && activeIndexs.includes(i)) {
                  !canOpenAll && setactiveIndexs([]);
                  canOpenAll &&
                    setactiveIndexs(activeIndexs.filter((ai) => ai != i));
                } else {
                  !canOpenAll && setactiveIndexs([i]);
                  canOpenAll && setactiveIndexs([...activeIndexs, i]);
                }
              }}
            >
              <div>{item.title}</div>
              {children.titleArrow ? (
                <div
                  className={`titleArrow ${
                    activeIndexs.includes(i) ? "isArrowOpen" : ""
                  }`}
                >
                  {children.titleArrow}
                </div>
              ) : (
                needArrow && (
                  <div
                    className={`box  ${activeIndexs.includes(i) ? "isArrowOpen" : ""}`}
                    style={{ borderTopColor: arrowColor }}
                  >
                    <div
                      className={arrowType == "slim" ? "slim" : ""}
                      style={{ borderTopColor: 'black' }}
                    ></div>
                  </div>
                )
              )}
            </div>
            <div
              className={`item-content ${
                activeIndexs.includes(i) ? "isContentopen" : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
