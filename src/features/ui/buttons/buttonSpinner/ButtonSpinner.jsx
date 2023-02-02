import { PropagateLoader } from 'react-spinners';

const ButtonSpinner = () => {
  return (
    <PropagateLoader
      size={8}
      color="#253661"
      cssOverride={{
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default ButtonSpinner;
