import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const MenuContentItems = () => {
  const menuContent = [
    { label: 'Settings', path: 'settings' },
    { label: 'Your posts', path: 'posts' },
  ];

  return menuContent.map((item, index) => {
    const key = index + 1;
    const { label, path } = item;
    return (
      <li key={key}>
        <StyledNavLink
          to={path}
          className="text-black after:bg-black after:bottom-[-2px]"
        >
          {label}
        </StyledNavLink>
      </li>
    );
  });
};

export default MenuContentItems;
