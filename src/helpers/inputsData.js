import patterns from 'helpers/patterns';

const { emailPattern, fullNamePattern } = patterns;
export const loginInputs = {
  email: {
    className: 'mb-2',
    placeholder: 'Your email',
    type: 'email',
    label: 'email',
    options: {
      pattern: {
        value: emailPattern,
        message: 'Invalid email',
      },
      minLength: {
        value: 10,
        message: 'Minimum 10 symbols',
      },
      maxLength: {
        value: 32,
        message: 'Maximum 32 symbols',
      },
      required: 'This is required input',
    },
  },

  password: {
    className: 'mb-2',
    placeholder: 'Your password',
    type: 'password',
    label: 'password',
    options: {
      minLength: {
        value: 10,
        message: 'Minimum 10 symbols',
      },
      maxLength: {
        value: 64,
        message: 'Maximum 64 symbols',
      },
      required: 'This is required input',
    },
  },
};

export const registrationInputs = {
  email: {
    className: 'my-2',
    placeholder: 'Enter valid email',
    type: 'email',
    label: 'email',
    options: {
      pattern: {
        value: emailPattern,
        message: 'Invalid email',
      },
      minLength: {
        value: 10,
        message: 'Minimum 10 symbols',
      },
      maxLength: {
        value: 32,
        message: 'Maximum 32 symbols',
      },
      required: 'This is required input',
    },
  },

  password: {
    className: 'my-2',
    placeholder: 'Enter your future password',
    type: 'password',
    label: 'password',
    options: {
      minLength: {
        value: 10,
        message: 'Minimum 10 symbols',
      },
      maxLength: {
        value: 32,
        message: 'Maximum 32 symbols',
      },
      required: 'This is required input',
    },
  },

  confirmPassword: {
    className: 'my-2',
    placeholder: 'Confirm password',
    type: 'password',
    label: 'passConfirm',
    options: {
      required: 'This is required input',
    },
  },

  fullName: {
    className: 'my-2',
    placeholder: 'Enter your full name',
    type: 'text',
    label: 'fullName',
    options: {
      pattern: {
        value: fullNamePattern,
        message: 'Please, enter correct name',
      },
      minLength: {
        value: 5,
        message: 'Minimum 5 symbols',
      },
      maxLength: {
        value: 32,
        message: 'Maximum 32 symbols',
      },
      required: 'This is required input',
    },
  },

  age: {
    className: 'my-2',
    placeholder: 'Enter your age',
    type: 'number',
    label: 'age',
    options: {
      max: {
        value: 110,
        message: 'You art too old',
      },
      min: {
        value: 10,
        message: 'You are too young',
      },
      maxLength: {
        value: 3,
        message: 'Maximum 3 symbols',
      },
      required: 'This is required input',
    },
  },
};
