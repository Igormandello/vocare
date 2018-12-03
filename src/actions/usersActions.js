export const PICTURE_EDIT_REQUESTED = 'PICTURE_EDIT_REQUESTED';
export const PICTURE_EDIT_SUCCEEDED = 'PICTURE_EDIT_SUCCEEDED';
export const PICTURE_EDIT_FAILED = 'PICTURE_EDIT_FAILED';

export const INFO_EDIT_REQUESTED = 'INFO_EDIT_REQUESTED';
export const INFO_EDIT_SUCCEEDED = 'INFO_EDIT_SUCCEEDED';
export const INFO_EDIT_FAILED = 'INFO_EDIT_FAILED';

export const editUserPicture = (profile_picture, id, access_token) => ({
  type: PICTURE_EDIT_REQUESTED,
  profile_picture,
  id,
  access_token
});

export const editUserInfo = (oldUser, newUser) => ({
  type: INFO_EDIT_REQUESTED,
  oldUser,
  newUser,
  id: oldUser.id,
  access_token: oldUser.access_token
});