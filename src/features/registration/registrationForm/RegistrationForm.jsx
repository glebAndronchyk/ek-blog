import { useForm } from 'react-hook-form';

import FormInput from 'features/ui/formInput/FormInput';
import Form from 'features/ui/form/Form';
import AuthButton from 'features/ui/authButton/AuthButton';
import InputError from 'features/inputError/InputError';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit', defaultValues: { email: '', password: '' } });

  const onSubmit = data => {
    console.log(data);
  };
  const error = null;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="z-50 top-[10%] left-[45%] max-w-[937px] w-full border-2"
    >
      <h3 className="font-code text-3xl text-black mb-4">Create Account</h3>
      <FormInput
        className="my-2"
        placeholder="Enter valid email"
        type="email"
        register={register}
        label="email"
        options={{
          pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Invalid email' },
          minLength: { value: 10, message: 'Minimum 10 symbols' },
          maxLength: { value: 32, message: 'Maximum 32 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        errors={errors}
        axiosError={error}
        name="email"
      />
      <FormInput
        className="my-2"
        placeholder="Enter your future password"
        type="password"
        register={register}
        label="password"
        options={{
          minLength: { value: 10, message: 'Minimum 10 symbols' },
          maxLength: { value: 32, message: 'Maximum 32 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        errors={errors}
        axiosError={error}
        name="password"
      />
      <FormInput
        className="my-2"
        placeholder="Repeat password"
        type="password"
        register={register}
        label="passConfirm"
        options={{
          //TODO: PASS CHECKER
          minLength: { value: 10, message: 'Minimum 10 symbols' },
          maxLength: { value: 32, message: 'Maximum 32 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        errors={errors}
        axiosError={error}
        name="passConfirm"
      />
      <FormInput
        className="my-2"
        placeholder="Enter your full name"
        type="text"
        register={register}
        label="fullName"
        options={{
          //TODO: PATTERN
          minLength: { value: 10, message: 'Minimum 5 symbols' },
          maxLength: { value: 32, message: 'Maximum 32 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        errors={errors}
        axiosError={error}
        name="fullName"
      />
      <FormInput
        className="my-2"
        placeholder="Enter your age"
        type="number"
        register={register}
        label="age"
        options={{
          //TODO: AGE CHECKER < 110
          maxLength: { value: 3, message: 'Maximum 3 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        errors={errors}
        axiosError={error}
        name="age"
      />
      {/*TODO: MAKE AVATAR SELECTION*/}
      <AuthButton
        label="Create account"
        entity="registration"
        className="mt-2"
      />
    </Form>
  );
};

export default RegistrationForm;
