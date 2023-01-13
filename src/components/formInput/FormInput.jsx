import inputTailwindClasses from "./inputTailwindClasses";

const FormInput = () => {
  return (
    <input type='text'
           placeholder='Placeholder'
           className={inputTailwindClasses}
    />
  )
}

export default FormInput;
