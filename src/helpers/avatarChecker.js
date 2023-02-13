import avatars from 'helpers/avatars';

const avatarChecker = ({ currentUserID, creatorID, currentUserAvatar, creatorAvatar, isAuth }) => {
  if (currentUserID === creatorID) {
    return currentUserAvatar;
  }
  if (!isAuth && !creatorAvatar) return avatars[0];
  return creatorAvatar || avatars[0];
};

export default avatarChecker;
