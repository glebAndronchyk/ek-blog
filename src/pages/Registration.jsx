import RegistrationForm from 'features/registration/registrationForm/RegistrationForm';
import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

import './registration.css';
import Logo from 'assets/images/logo.png';

const Registration = () => {
  return (
    <div className="flex h-[100vh] bg-[url('assets/images/registrationBg.png')] bg-center bg-cover flex justify-evenly items-center">
      <StyledNavLink
        to="/"
        type="toPosts"
      >
        &lt; Back to posts
      </StyledNavLink>
      <div className="max-w-[491px] w-full">
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
