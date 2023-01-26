import { useForm } from 'react-hook-form';

import FormInput from 'features/ui/formInput/FormInput';
import Form from 'features/ui/form/Form';
import AuthButton from 'features/ui/authButton/AuthButton';
import { registrationInputs } from 'helpers/inputsData';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: { email: '', password: '', passConfirm: '', fullName: '', age: '' },
  });

  const onSubmit = data => {
    console.log(data);
  };

  const inputs = Object.keys(registrationInputs).map((item, index) => {
    const { className, placeholder, type, label, options } = registrationInputs[item];
    return (
      <FormInput
        key={index}
        register={register}
        watch={watch}
        errors={errors}
        className={className}
        placeholder={placeholder}
        type={type}
        label={label}
        options={options}
      />
    );
  });

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="z-50 top-[10%] left-[45%] max-w-[937px] w-full border-2"
    >
      <h3 className="font-code text-3xl text-black mb-4">Create Account</h3>
      {inputs}
      {/*TODO: MAKE AVATAR SELECTION*/}
      <AuthButton
        label="Create account"
        className="mt-2"
      />
    </Form>
  );
};

export default RegistrationForm;
