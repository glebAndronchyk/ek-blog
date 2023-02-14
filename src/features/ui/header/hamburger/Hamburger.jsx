import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import Button from 'features/ui/buttons/button/Button';
import Menu from 'features/ui/header/hamburger/menu/Menu';

const Hamburger = props => {
  const { shownCondition } = props;
  const [menuShown, setMenuShown] = useState(false);

  const menuHandler = () => {
    setMenuShown(!menuShown);
  };

  return (
    shownCondition && (
      <>
        <Button
          onClick={menuHandler}
          className="block w-14 rounded-lg py-3 bg-app-red border-2 border-app-red text-black"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            className="text-xl"
          />
        </Button>

        <Menu
          shown={menuShown}
          setShown={setMenuShown}
        />
      </>
    )
  );
};

Hamburger.propTypes = {
  shownCondition: PropTypes.bool.isRequired,
};

export default Hamburger;
