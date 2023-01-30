import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { tryToLogin } from 'redux/slices/userSlice';
import { modalClosed } from 'redux/slices/modalSlice';
import { loginInputs } from 'helpers/inputsData';
import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';
import Form from 'features/ui/form/Form';
import FormInput from 'features/ui/formInput/FormInput';
import AuthButton from 'features/ui/authButton/AuthButton';
import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit', defaultValues: { email: '', password: '' } });

  const { isAuth, error } = useSelector(state => state.user);
  const { status } = error;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(modalClosed());
    }
  }, [isAuth]);

  const onSubmit = data => {
    dispatch(tryToLogin(data));
  };

  if (status && status !== 400) return ErrorPlug;

  const inputs = Object.keys(loginInputs).map(item => {
    const { className, placeholder, type, label, options } = loginInputs[item];
    return (
      <FormInput
        key={uuidv4()}
        register={register}
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
      className="w-2/6"
    >
      <h3 className="font-code text-3xl text-black mb-3">Hello World!</h3>
      <span className="font-lato font-[600] text-gray-300 text-base mb-6">Login with your details</span>
      {inputs}
      <AuthButton
        className="mb-2"
        label="Login"
      />
      <StyledNavLink
        to="/registration"
        type="toRegister"
      >
        Or create an account &gt;
      </StyledNavLink>
    </Form>
  );
};
export default LoginForm;
