import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "./WithCustomTooltip.css";
import * as React from "react";

import { useEffect } from "react";
import { createPortal } from "react-dom";
const data = [
  {
    name: "Page A",
    uv: 100,
  },
  {
    name: "Page B",
    uv: 30,
  },
  {
    name: "Page C",
    uv: 50,
  },
  {
    name: "Page D",
    uv: 80,
  },
  {
    name: "Page E",
    uv: 55,
  },
  {
    name: "Page F",
    uv: 5,
  },
  {
    name: "Page G",
    uv: 25,
  },
];

function Rechart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      layout="vertical"
      barSize={50}
    >
      <Bar dataKey="uv" fill="#82ca9d" />
      <XAxis dataKey="uv" type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip content={<CustomTooltip />} />
    </BarChart>
  );
}

const CustomTooltip = ({ active, payload, label, coordinate }) => {
  if (active && payload && payload.length) {
    const left = `${coordinate.x}px`;
    const top = `${coordinate.y}px`;
    return (
      <Portal portalId="tooltip-portal">
        <div
          className="custom-tooltip"
          style={{
            transform: `translate(${left}, ${top})`,
            position: "absolute",
            zIndex: 3,
            width: "max-content",
          }}
        >
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="desc">Some additional Information.</p>
        </div>
      </Portal>
    );
  }

  return null;
};

const RECHARTS_DEFAULT_TOOLTIP_CLASSNAME = ".recharts-tooltip-wrapper";

export function WithCustomTooltipFixed() {
  const wrapperRef = React.useRef(null);
  const clonedPortalRef = React.useRef(null);
  const chartContainerRef = React.useRef(null);

  React.useEffect(() => {
    const chartWrapper = chartContainerRef.current;
    const clonedPortal = clonedPortalRef.current;

    function handleMouseMove() {
      const defaultRechartsTooltipTargetElement =
        wrapperRef.current.querySelector(RECHARTS_DEFAULT_TOOLTIP_CLASSNAME);
      const rect = defaultRechartsTooltipTargetElement?.getBoundingClientRect();

      const tooltipTargetPos = Number(rect?.y?.toFixed(0));

      clonedPortal.style.top = `${tooltipTargetPos}px`;
    }

    chartWrapper.addEventListener("mouseover", handleMouseMove);

    return () => chartWrapper.removeEventListener("mouseover", handleMouseMove);
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <p className="heading">Fixed Tooltip</p>
      <div
        id="tooltip-portal"
        ref={clonedPortalRef}
        style={{
          position: "absolute",
          pointerEvents: "none",
        }}
      ></div>
      <div className="container" ref={chartContainerRef}>
        <Rechart />
      </div>
    </div>
  );
}

/**
 * Reference - https://ankitjoshi.hashnode.dev/react-portal-and-tooltip
 */
function Portal({ children, portalId }) {
  const portal = document.getElementById(portalId);
  const el = document.createElement("div");

  useEffect(() => {
    portal.appendChild(el);
    return () => portal.removeChild(el);
  }, [el, portal]);

  return createPortal(children, el);
}

export { Portal };
