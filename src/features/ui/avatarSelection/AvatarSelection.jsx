import PropTypes from 'prop-types';
import InputError from 'features/ui/inputs/inputError/InputError';

const AvatarSelection = props => {
  const { children, errors } = props;

  return (
    <>
      <span className="font-code mb-1.5">Select avatar</span>
      <div className="flex justify-between w-3/4 mt-1.5 rounded-[20px] bg-white p-2">{children}</div>
      <InputError
        errors={errors}
        name="avatar"
      />
    </>
  );
};

AvatarSelection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
};

export default AvatarSelection;
