import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';
import Form from 'features/ui/form/Form';
import FormSubmitButton from 'features/ui/buttons/formSubmitButton/FormSubmitButton';
import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';
import TextInputs from 'features/ui/inputs/textInputs/TextInputs';
import { tryToLogin } from 'redux/slices/userSlice';
import { modalClosed } from 'redux/slices/modalSlice';
import { loginInputs } from 'helpers/inputsData';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onSubmit', defaultValues: { email: '', password: '' } });

  const { isAuth, error, loading } = useSelector(state => state.user);
  const { status } = error;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(modalClosed());
    }
  }, [isAuth]);

  useEffect(() => {
    return () => reset();
  }, []);

  const onSubmit = data => {
    dispatch(tryToLogin(data));
  };

  if (status && status !== 400) return <ErrorPlug />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full rounded-none
                md:w-[80%] md:rounded-[20px] md:h-auto
                lg:w-[60%]
                xl:w-[40%]
                2xl:w-[30%]"
      type="modal"
    >
      <h3 className="font-code text-3xl text-black mb-3">Hello World!</h3>
      <span className="font-lato font-[600] text-gray-300 text-base mb-6">Login with your details</span>
      <TextInputs
        register={register}
        errors={errors}
        castObject={loginInputs}
      />
      <FormSubmitButton
        className="mb-2"
        label="Login"
        loadingStatus={loading}
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
