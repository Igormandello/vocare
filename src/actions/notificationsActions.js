export const UNREADEN_REQUESTED = 'UNREADEN_REQUESTED';
export const UNREADEN_SUCCEEDED = 'UNREADEN_SUCCEEDED';
export const UNREADEN_FAILED = 'UNREADEN_FAILED';

export const unreaden = (id, access_token) => ({
  type: UNREADEN_REQUESTED,
  id,
  access_token
});