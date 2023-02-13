import PropTypes from 'prop-types';

import avatars from 'helpers/avatars';
import FormInput from 'features/ui/inputs/formInput/FormInput';

const AvatarSelectionInputs = props => {
  const { register } = props;

  return avatars.map((item, index) => {
    return (
      <div
        className="flex flex-col items-center"
        key={index}
        aria-label="avatarsGroup"
      >
        <FormInput
          register={register}
          className="mb-1.5 cursor-pointer"
          type="radio"
          label="avatar"
          value={item}
          options={{
            required: 'You need to pick an avatar',
          }}
        />
        <img
          src={item}
          className="w-14 h-14"
          alt="avatar"
        />
      </div>
    );
  });
};

AvatarSelectionInputs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  register: PropTypes.func.isRequired,
};

export default AvatarSelectionInputs;
