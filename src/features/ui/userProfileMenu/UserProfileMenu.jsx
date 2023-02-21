import MenuContentItems from 'features/ui/userProfileMenu/MenuContentItems';

const UserProfileMenu = () => {
  return (
    <ul className="flex items-center justify-evenly bg-app-red p-2 border-t-2">
      <MenuContentItems />
    </ul>
  );
};

export default UserProfileMenu;
