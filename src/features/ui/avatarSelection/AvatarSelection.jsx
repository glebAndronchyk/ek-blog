import PropTypes from 'prop-types';
import InputError from 'features/ui/inputs/inputError/InputError';

const AvatarSelection = props => {
  const { children, errors } = props;

  return (
    <>
      <span className="font-code mb-1.5">Select avatar</span>
      <div
        className="w-[95%] flex justify-between mt-1.5 rounded-[20px] bg-white p-2
                   md:w-3/4"
      >
        {children}
      </div>
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
