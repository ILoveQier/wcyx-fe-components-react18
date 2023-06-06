import React, { useState, useEffect } from "react";

import "./wf.scss";

const POS = {
  tl: { transform: "translate(-100%, -100%)" },
  tc: { transform: "translate(-50%, -110%)" },
  tr: { transform: "translate(0%, -100%)" },
  cl: { transform: "translate(-110%, -50%)" },
  cc: { transform: "translate(-60%, -50%)" },
  bl: { transform: "translate(-105%, 0%)" },
  bc: { transform: "translate(-50%, 15%)" },
  br: { transform: "translate(10%, 0%)" },
};

/**
 * 全局提示组件,可以用于根据鼠标位置展示
 */
export default function WindowToolTip({
  children = <></>,
  styles = {},
  isShow = false,
  isFixed = false,
  pos = "tr",
}) {
  var [mousePos, setmousePos] = useState({ left: 0, top: 0 });
  // 定义方法，改变状态管理初始值。
  function onSetmousePos(e) {
    console.log(e);
    console.log({ left: e.clientX, top: e.clientY });
    setmousePos({ left: e.clientX, top: e.clientY });
  }
  useEffect(() => {
    // 通过useEffect挂载的第一个方法，监听鼠标移动。
    !isFixed && window.addEventListener("mousemove", onSetmousePos);
    // 通过useEffect return卸载的方法，移除鼠标监听事件。
    return () => window.removeEventListener("mousemove", onSetmousePos);
  }, []);
  return (
    <>
      {isShow ? (
        <div
          className="wf-container"
          style={{
            ...mousePos,
            ...POS[pos],
            ...styles,
          }}
        >
          {children}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
