export const PICTURE_EDIT_REQUESTED = 'PICTURE_EDIT_REQUESTED';
export const PICTURE_EDIT_SUCCEEDED = 'PICTURE_EDIT_SUCCEEDED';
export const PICTURE_EDIT_FAILED = 'PICTURE_EDIT_FAILED';

export const editUserPicture = (profile_picture, id, access_token) => ({
  type: PICTURE_EDIT_REQUESTED,
  profile_picture,
  id,
  access_token
});