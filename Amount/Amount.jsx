import React, { useEffect, useState } from "react";

import "./at.scss";

export default function Amount({
  amount = 0,
  itemStyle = {},
}) {
  const [moneys, setmoneys] = useState([]);
  useEffect(() => {
    let marr = [];
    String(amount)
      .split("")
      .map((am, i) => {
        marr.push(am);
        if ((i + 1) % 3 == 0) {
          marr.push(",");
        }
      });

    setmoneys(marr);
    return () => {};
  }, [amount]);

  return (
    <div className="moneys-container">
      {moneys.map((m, i) => {
        return (
          <React.Fragment key={i}>
            {(i != moneys.length - 1 || m != ",") && (
              <div className={`vdm-wrap `} style={{ ...itemStyle }}>
                {/* <div>{m}</div> */}
                {m !== "," ? (
                  <div className="vd-group" style={{ bottom: `-${m * 20}px` }}>
                    <div>9</div>
                    <div>8</div>
                    <div>7</div>
                    <div>6</div>
                    <div>5</div>
                    <div>4</div>
                    <div>3</div>
                    <div>2</div>
                    <div>1</div>
                    <div>0</div>
                  </div>
                ) : (
                  ","
                )}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
