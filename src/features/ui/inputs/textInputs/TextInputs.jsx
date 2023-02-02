import FormInput from 'features/ui/inputs/formInput/FormInput';

const TextInputs = props => {
  const { register, errors, watch, castObject } = props;

  return Object.keys(castObject).map((item, index) => {
    const { className, placeholder, type, label, options } = castObject[item];
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
