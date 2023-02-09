import classNames from 'classnames';
import PropTypes from 'prop-types';

const Form = props => {
  const { className, onSubmit, children, type } = props;
  const formClassName = classNames(
    'flex flex-col justify-between bg-gray-200 items-center rounded-[20px] py-20',
    className,
    {
      absolute: type === 'modal',
    },
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
  type: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Form;
