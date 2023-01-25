import classNames from 'classnames';
import PropTypes from 'prop-types';

const Form = props => {
  const { className, onSubmit, children } = props;
  const formClassName = classNames(
    'flex absolute flex-col justify-between bg-gray-200 items-center rounded-[20px] py-20',
    className,
  );

  return (
    <form
      className={formClassName}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Form;
