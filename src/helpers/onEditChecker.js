const onEditChecker = configuration => {
  const { condition, output } = configuration;
  return condition ? output : '';
};

export default onEditChecker;
