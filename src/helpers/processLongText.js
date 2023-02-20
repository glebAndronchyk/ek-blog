const processLongText = (text, breakpoint) => {
  let breakpointValue = 130;
  if (breakpoint > 2000) {
    breakpointValue = 220;
  }

  return text.length > breakpointValue ? `${text.slice(0, breakpointValue)}...` : text;
};

export default processLongText;
