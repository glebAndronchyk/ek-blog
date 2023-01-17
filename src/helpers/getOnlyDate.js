const getOnlyDate = date => {
  const tIndex = date.indexOf('T');

  return date.slice(0, tIndex);
};

export default getOnlyDate;
