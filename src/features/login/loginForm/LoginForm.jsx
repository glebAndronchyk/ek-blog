import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { tryToLogin } from '../../../redux/slices/userSlice';
import { modalClosed } from '../../../redux/slices/modalSlice';
import FormInput from '../../ui/formInput/FormInput';
import LoginFormButton from '../loginFormButton/LoginFormButton';
import InputError from '../../inputError/InputError';
import ErrorPlug from '../../ui/errorPlug/ErrorPlug';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit', defaultValues: { email: '', password: '' } });

  const { isAuth, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(modalClosed());
    }
  }, [isAuth]);

  const onSubmit = data => {
    dispatch(tryToLogin(data));
  };

  if (error && error !== 400) return ErrorPlug;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex absolute mx-auto flex-col justify-between bg-gray-200 items-center rounded-[20px] w-2/6 py-20"
    >
      <h3 className="font-code text-3xl text-black mb-3">Hello World!</h3>
      <span className="font-lato font-[600] text-gray-300 text-base mb-6">Login with your details</span>
      <FormInput
        className="mb-2"
        placeholder="Your email"
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
        className="mb-2"
        placeholder="Your password"
        type="password"
        register={register}
        label="password"
        options={{
          minLength: { value: 10, message: 'Minimum 10 symbols' },
          maxLength: { value: 64, message: 'Maximum 64 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        axiosError={error}
        errors={errors}
        name="password"
      />
      <LoginFormButton />
    </form>
  );
};
export default LoginForm;
