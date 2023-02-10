import avatars from 'helpers/avatars';

const avatarChecker = ({ currentUserID, creatorID, currentUserAvatar, creatorAvatar, localCurrentUserAvatar }) => {
  if (currentUserID === creatorID) {
    return currentUserAvatar;
  }
  if (!creatorAvatar && !localCurrentUserAvatar) return avatars[0];
  return creatorAvatar || localCurrentUserAvatar;
};

export default avatarChecker;
