const transformRegistrationFormData = enteredData => {
  const { age, avatar, email, fullName, password } = enteredData;
  const splittedFullName = fullName.split(' ');
  return {
    age,
    avatar,
    email,
    firstname: splittedFullName[0],
    lastname: splittedFullName[1],
    password,
  };
};

export default transformRegistrationFormData;
