export default {
  //Auth methods
  loginUser: (email, password) => {
    return fetch('http://localhost:8080/api/auth/login', {
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
    return authRequest('http://localhost:8080/api/auth/logout', 'POST', access_token, { id })
    .then(res => {
      if (!res.ok)
        throw res.statusText;
    });
  },

  //Notifications methods
  unreaden: (id, access_token) => {
    return authRequest(`http://localhost:8080/api/users/${id}/notifications/unreaden`, 'GET', access_token)
    .then(res => {
      if (!res.ok)
        throw res.statusText;

      return res.json();
    });
  },
  fetchNotifications: (id, access_token, page) => {
    return authRequest(`http://localhost:8080/api/users/${id}/notifications?page=${page}`, 'GET', access_token)
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