import { MoonLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex items-center pt-20 justify-center">
      <MoonLoader
        speedMultiplier={0.7}
        color="#D03450"
      />
    </div>
  );
};
export default Spinner;
