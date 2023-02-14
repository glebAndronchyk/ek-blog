const processLongText = text => {
  return text.length > 250 ? `${text.slice(0, 250)}...` : text;
};

export default processLongText;
