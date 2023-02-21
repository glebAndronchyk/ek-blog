import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const MenuContentItems = () => {
  const menuContent = ['Settings', 'Your posts'];

  return menuContent.map((item, index) => {
    const key = index + 1;
    return (
      <li
        key={key}
        className="font-inter font-[600] text-black"
      >
        <StyledNavLink
          to="settings"
          type="profilePage"
        >
          {item}
        </StyledNavLink>
      </li>
    );
  });
};

export default MenuContentItems;
