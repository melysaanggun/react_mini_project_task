export default function LoadingSvg() {
  return (
    <svg
      style={{
        margin: 'auto',
        background: 'rgb(255, 255, 255)',
        display: "block",
        shapeRendering: "auto"
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="#d7263d">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.5s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="2s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#d7263d;#ff9d33;#1c2960;#16c48e;#d7263d"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#d7263d">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#16c48e">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#1c2960">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#ff9d33">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.5s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.5s"
        ></animate>
      </circle>
    </svg>
  );
}
