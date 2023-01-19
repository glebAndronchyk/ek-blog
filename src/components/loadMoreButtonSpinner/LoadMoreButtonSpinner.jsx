const LoadMoreButtonSpinner = () => {
  return (
    <svg
      version="1.1"
      height="24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
      data-testid="line-wave-svg"
    >
      <rect
        x="70"
        y="50"
        width="10"
        height="80"
        fill="#253661"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="50"
        y="50"
        width="10"
        height="80"
        fill="#253661"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="30"
        y="50"
        width="10"
        height="80"
        fill="#253661"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default LoadMoreButtonSpinner;
