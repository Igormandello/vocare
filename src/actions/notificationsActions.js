export const UNREADEN_REQUESTED = 'UNREADEN_REQUESTED';
export const UNREADEN_SUCCEEDED = 'UNREADEN_SUCCEEDED';
export const UNREADEN_FAILED = 'UNREADEN_FAILED';

export const NOTIFICATIONS_REQUESTED = 'NOTIFICATIONS_REQUESTED';
export const NOTIFICATIONS_SUCCEEDED = 'NOTIFICATIONS_SUCCEEDED';
export const NOTIFICATIONS_FAILED = 'NOTIFICATIONS_FAILED';

export const unreaden = (id, access_token) => ({
  type: UNREADEN_REQUESTED,
  id,
  access_token
});

export const fetchNotifications = (id, access_token) => ({
  type: NOTIFICATIONS_REQUESTED,
  id,
  access_token
});