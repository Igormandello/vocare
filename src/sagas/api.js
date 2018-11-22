export default {
  fetchUser: (id) => {
    if (id && Number.isInteger(id) && id > 0)
      return fetch('http://localhost:8080/api/users/' + id).then(res => res.json());

    return fetch('http://localhost:8080/api/users/').then(res => res.json());
  }
};