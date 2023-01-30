import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'features/ui/form/Form';
import SuccessWindow from 'features/ui/successWindow/SuccessWindow';
import transformRegistrationFormData from 'helpers/dataTransformers';
import { tryToRegister } from 'redux/slices/userSlice';
import View from 'features/registration/registrationForm/View';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      passConfirm: '',
      fullName: '',
      age: '',
    },
  });
  const dispatch = useDispatch();
  const { error, isAuth } = useSelector(state => state.user);

  const onSubmit = data => {
    dispatch(tryToRegister(transformRegistrationFormData(data)));
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[937px] w-full border-2 relative"
    >
      {isAuth ? (
        <SuccessWindow />
      ) : (
        <View
          register={register}
          watch={watch}
          errors={errors}
          axiosError={error}
        />
      )}
    </Form>
  );
};

export default RegistrationForm;
