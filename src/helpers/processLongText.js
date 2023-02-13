const processLongText = text => {
  return text.length > 400 ? `${text.slice(0, 400)}...` : text;
};

export default processLongText;
