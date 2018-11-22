export default {
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
        return null;

      return res.json();
    });
  }
};