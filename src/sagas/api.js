const API_HOST = 'http://localhost:8080';

export default {
  //Auth methods
  loginUser: (email, password) => {
    return openRequest(`${API_HOST}/api/auth/login`, 'POST', {
      email,
      password
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
  },
  fetchUser: (id) => {
    return openRequest(`${API_HOST}/api/users/${id}`, 'GET')
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },

  //Posts methods
  fetchPosts: (page = 0) => {
    return openRequest(`${API_HOST}/api/posts?page=${page}`, 'GET')
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },
  loadPost: (postId, access_token) => {
    return authRequest(`${API_HOST}/api/posts/${postId}`, 'GET', access_token)
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },
  loadComments: (postId, access_token) => {
    return authRequest(`${API_HOST}/api/posts/${postId}/comments`, 'GET', access_token)
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },
};

function openRequest(url, method, body = {}) {
  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: method !== 'GET' ? JSON.stringify({
      ...body
    }) : undefined
  });
}

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