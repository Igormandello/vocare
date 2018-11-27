export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const VERIFICATION_REQUESTED = 'VERIFICATION_REQUESTED';
export const VERIFICATION_SUCCEEDED = 'VERIFICATION_SUCCEEDED';
export const VERIFICATION_FAILED = 'VERIFICATION_FAILED';

export const loginUser = (email, password) => ({
  type: LOGIN_REQUESTED,
  email,
  password
});

export const logout = (id, access_token) => ({
  type: LOGOUT_REQUESTED,
  id,
  access_token
});

export const verifyUser = (id, access_token) => ({
  type: VERIFICATION_REQUESTED,
  id,
  access_token
});