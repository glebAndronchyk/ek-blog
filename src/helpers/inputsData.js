import patterns from 'helpers/patterns';

const { emailPattern } = patterns;
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

export const registrationInputs = {};
