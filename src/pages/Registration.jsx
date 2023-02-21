import RegistrationForm from 'features/registration/registrationForm/RegistrationForm';
import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

import 'pages/css/registration.css';
import Logo from 'assets/images/logo.png';

const Registration = () => {
  return (
    <div className="flex min-h-screen bg-[url('assets/images/registrationBg.png')] bg-center bg-cover flex justify-evenly items-center">
      <StyledNavLink
        to="/"
        className="absolute z-[20] top-[2%] left-[1%]"
      >
        &lt; Back to posts
      </StyledNavLink>
      <div
        className="hidden
                   lg:block lg:max-w-[300px] lg:w-full
                   xl:max-w-[491px]"
      >
        <img
          className="mb-14"
          src={Logo}
          alt="logo"
        />
        <span className="font-code">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi dolore dolores ducimus error ex, facere
          laboriosam laudantium molestias necessitatibus nisi nulla, perspiciatis quae rem reprehenderit sed soluta
          tempore veritatis!
        </span>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
