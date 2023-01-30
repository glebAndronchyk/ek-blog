import { registrationInputs } from 'helpers/inputsData';
import FormInput from 'features/ui/formInput/FormInput';

const TextInputs = props => {
  const { register, errors, watch } = props;

  return Object.keys(registrationInputs).map((item, index) => {
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
};

export default TextInputs;
