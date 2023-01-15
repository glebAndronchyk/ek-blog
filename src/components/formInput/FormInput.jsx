const FormInput = (props) => {

  const {placeholder, type} = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className='form-input'
    />
  )
}

export default FormInput;
