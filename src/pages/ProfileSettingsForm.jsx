import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Form from 'features/ui/form/Form';
import TextInputs from 'features/ui/inputs/textInputs/TextInputs';
import AvatarSelection from 'features/registration/avatarSelection/AvatarSelection';
import AvatarSelectionInputs from 'features/ui/inputs/avatarSelectionInputs/AvatarSelectionInputs';
import FormSubmitButton from 'features/ui/buttons/formSubmitButton/FormSubmitButton';
import { userDataInputs } from 'helpers/inputsData';
import { getUserDataFromStorage } from 'helpers/localStorage';
import { tryToEditUserData } from 'redux/slices/userSlice';
import { transformDirtyFields } from 'helpers/dataTransformers';
import { REJECTED } from 'helpers/loadingStatus';

const ProfileSettingsForm = () => {
  const { loading } = useSelector(state => state.user);
  const userData = getUserDataFromStorage();
  const { email, age, avatar, firstname, lastname, id } = userData;

  const fullName = `${firstname} ${lastname}`;
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      email,
      age,
      fullName,
      avatar,
      password: '',
      passConfirm: '',
    },
  });
  const dispatch = useDispatch();
  const formClassName = classNames('w-[45%]', {
    'ring-2 ring-app-red': loading === REJECTED,
  });

  const getUpdatedFields = formData => {
    const arrayOfDirtyFields = Object.keys(dirtyFields);
    const arrayOfObjectEntries = arrayOfDirtyFields.map(item => {
      return [item, formData[item]];
    });
    const dirtyFieldsObject = Object.fromEntries(arrayOfObjectEntries);
    return transformDirtyFields(dirtyFieldsObject);
  };

  const onSubmit = data => {
    const updatedFields = getUpdatedFields(data);
    dispatch(tryToEditUserData([updatedFields, id]));
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className={formClassName}
      >
        <h3 className="font-code">Edit your data</h3>
        <TextInputs
          register={register}
          watch={watch}
          errors={errors}
          castObject={userDataInputs}
        />
        <AvatarSelection errors={errors}>
          <AvatarSelectionInputs register={register} />
        </AvatarSelection>
        <FormSubmitButton
          disabled={Object.keys(dirtyFields).length === 0}
          label="Edit"
          loadingStatus={loading}
        />
      </Form>
    </div>
  );
};

export default ProfileSettingsForm;
