import Error from '../../assets/images/error.png';

const ErrorPlug = () => {
  return (
    <div className="flex flex-col items-center pt-20 justify-center">
      <span className="text-2xl text-black">Something went wrong...</span>
      <img
        src={Error}
        className="h-40"
        alt="error"
      />
    </div>
  );
};
export default ErrorPlug;
