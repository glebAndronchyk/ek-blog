import './registration.css';
import Logo from 'assets/images/logo.png';

const Registration = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="relative z-40 w-[60%] bg-blue-100 shadow flex justify-evenly items-center">
        <div className="max-w-[491px] w-full">
          <img
            className="mb-14"
            src={Logo}
            alt="logo"
          />
          <span className="font-code">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi dolore dolores ducimus error ex,
            facere laboriosam laudantium molestias necessitatibus nisi nulla, perspiciatis quae rem reprehenderit sed
            soluta tempore veritatis!
          </span>
        </div>
        <div />
      </div>
      <div className="relative w-[40%] bg-app-red" />
      <form className="absolute z-50 top-1/2 left-[45%] max-w-[937px] w-full border-2">dd</form>
    </div>
  );
};

export default Registration;
