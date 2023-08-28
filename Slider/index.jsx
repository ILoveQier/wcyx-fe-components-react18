import React, { useEffect, useState, useRef } from "react";
import "./index.scss";

const STEP_OBJ = {
  0.1: "1",
  0.01: "2",
};

function Slider({
  children,
  containerStyle = {},
  min = 50,
  max = 100,
  step = 0.1,
  onChange = (e) => {},
}) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [handlePos, sethandlePos] = useState({ left: 0 });

  const [val, setVal] = useState(0);

  const handleParentRef = useRef(null);
  const handleItemRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      setIsMouseDown(false);
    });
    return () => {};
  }, []);

  useEffect(() => {
    let base =
      handleParentRef.current.clientWidth - handleItemRef.current.clientWidth;
    let nv = (max - min) * (handlePos.left / base) + min;
    let nnv = nv.toFixed(STEP_OBJ[step]);
    setVal(nnv);
    onChange(nnv);
    return () => {};
  }, [handlePos]);

  function _click_move_change(e, passMove = false) {
    if (!isMouseDown && !passMove) {
      return;
    }
    if (
      e.clientX >=
      handleParentRef.current.offsetLeft +
        handleParentRef.current.clientWidth -
        handleItemRef.current.clientWidth / 2
    ) {
      sethandlePos({
        left:
          handleParentRef.current.clientWidth -
          handleItemRef.current.clientWidth,
      });
      return;
    }
    if (
      e.clientX <=
      handleParentRef.current.offsetLeft + handleItemRef.current.clientWidth / 2
    ) {
      sethandlePos({
        left: 0,
      });
      return;
    }
    sethandlePos({
      left:
        e.clientX -
        handleParentRef.current.offsetLeft -
        handleItemRef.current.clientWidth / 2,
    });
  }

  return (
    <div
      ref={handleParentRef}
      className="slider-container"
      style={containerStyle}
      onClick={(e) => {
        _click_move_change(e, true);
      }}
      onMouseMove={(e) => {
        if (isMouseDown) {
          _click_move_change(e);
        }
      }}
    >
      <div
        ref={handleItemRef}
        className="handle-item"
        style={handlePos}
        onMouseDown={(e) => {
          setIsMouseDown(true);
        }}
      >
        {children ? children : <div className="default-handle"></div>}
      </div>
    </div>
  );
}

export default Slider;
