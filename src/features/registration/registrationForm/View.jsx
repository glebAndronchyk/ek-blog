import PropTypes from 'prop-types';

import { registrationInputs } from 'helpers/inputsData';
import InputErrorMessage from 'features/ui/inputs/inputError/inputErrorMessage/InputErrorMessage';
import AvatarSelection from 'features/ui/avatarSelection/AvatarSelection';
import AvatarSelectionInputs from 'features/ui/inputs/avatarSelectionInputs/AvatarSelectionInputs';
import FormSubmitButton from 'features/ui/buttons/formSubmitButton/FormSubmitButton';
import TextInputs from 'features/ui/inputs/textInputs/TextInputs';

const View = props => {
  const { register, errors, watch, axiosError, loading } = props;

  return (
    <>
      <h3 className="font-code text-3xl text-black mb-4">Create Account</h3>
      {axiosError ? <InputErrorMessage>Such person already has an account</InputErrorMessage> : null}
      <TextInputs
        register={register}
        watch={watch}
        errors={errors}
        castObject={registrationInputs}
      />
      <AvatarSelection errors={errors}>
        <AvatarSelectionInputs register={register} />
      </AvatarSelection>
      <FormSubmitButton
        label="Create account"
        className="mt-2"
        loadingStatus={loading}
      />
    </>
  );
};

View.propTypes = {
  register: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  axiosError: PropTypes.any.isRequired,
  watch: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
};

export default View;
