export default class Http {
  static post(route, body) {
    return fetch(route, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((data) => data.json())
  }

  static put(route, body) {
    return fetch(route, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((data) => data.json())
  }

  static delete(route) {
    return fetch(route, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => data.json())
  }
}