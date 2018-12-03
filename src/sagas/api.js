const API_HOST = 'http://localhost:8080';

export default {
  //Auth methods
  loginUser: (email, password) => {
    return fetch(`${API_HOST}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },
  logout: (id, access_token) => {
    return authRequest(`${API_HOST}/api/auth/logout`, 'POST', access_token, { id })
    .then(res => {
      if (!res.ok)
        throw res.statusText;
    });
  },
  verify: (id, access_token) => {
    return authRequest(`${API_HOST}/api/auth/verify/`, 'POST', access_token, { id })
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },

  //Notifications methods
  unreaden: (id, access_token) => {
    return authRequest(`${API_HOST}/api/users/${id}/notifications/unreaden`, 'GET', access_token)
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },
  fetchNotifications: (id, access_token, page = 0) => {
    return authRequest(`${API_HOST}/api/users/${id}/notifications?page=${page}`, 'GET', access_token)
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },

  //Users methods
  editUserPicture: (newPicture, id, access_token) => {
    return authRequest(`${API_HOST}/api/users/${id}/profile_picture`, 'PUT', access_token, { profile_picture: newPicture })
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },
  editUserInfo: (newUser, id, access_token) => {
    return authRequest(`${API_HOST}/api/users/${id}`, 'PUT', access_token, { ...newUser })
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  }
};

function authRequest(url, method, access_token, body = {}) {
  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token,
    },
    body: method !== 'GET' ? JSON.stringify({
      ...body
    }) : undefined
  });
}