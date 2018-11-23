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
    return authRequest('http://localhost:8080/api/auth/logout', id, access_token)
    .then(res => {
      if (!res.ok)
        throw res.statusText;
    });
  }
};

function authRequest(url, id, access_token, body = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token,
    },
    body: JSON.stringify({
      id,
      ...body
    })
  });
}