import queryString from 'query-string';

export class AbstractAPIService {
  async fetchJSON(url, options) {
    console.log('in fetchJson ', url);
    const response = await fetch(url, options);

    if (!response.ok) {
      console.log(response);
      const error = new Error(response.statusText);
      error.status = response.status;

      throw error;
    } else {
      if (response.status === 204) return {};

      return response.json();
    }
  }

  prepareRequest(url, method, body, queryparams, headers) {
    const token = localStorage.getItem('token');
    let options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    };

    if (Object.keys(body).length !== 0) {
      options = {
        ...options,
        body: JSON.stringify(body),
      };
    }

    if (Object.keys(queryparams).length !== 0) {
      const query = queryString.stringify(queryparams);

      return { url: `${url}?${query}`, options };
    }

    return { url, options };
  }

  get(url, schema, queryparams = {}, body = {}, headers = {}) {
    const request = this.prepareRequest(url, 'GET', body, queryparams, headers);

    console.log('In abstractService ', request);

    return this.fetchData(request);
  }

  post(url, body = {}, schema, queryparams = {}, headers = {}) {
    const request = this.prepareRequest(
      url,
      'POST',
      body,
      queryparams,
      headers,
    );

    return this.fetchData(request);
  }

  delete(url, schema, queryparams = {}, headers = {}) {
    const request = this.prepareRequest(
      url,
      'DELETE',
      {},
      queryparams,
      headers,
    );

    return this.fetchData(request);
  }

  put(url, body, schema, queryparams = {}, headers = {}) {
    const request = this.prepareRequest(url, 'PUT', body, queryparams, headers);

    return this.fetchData(request);
  }

  /*async fetchData({ url, options, schema }) {
    try {
      const data = await this.fetchJSON(
        `${process.env.API_URL}${url}`,
        options,
      );
      if (schema) {
        return { payload: data, ...normalize(data, schema) };
      }

      return { payload: data };
    } catch (error) {
      let message;

      switch (error.status) {
        case 500:
          message = 'Internal Server Error';
          break;
        case 422:
          // eslint-disable-next-line prefer-destructuring
          message = error.message;
          break;
        case 404:
          message = 'Not Found';
          break;
        case 403:
          message = 'Unauthorized';
          break;
        case 401:
          message = 'Invalid credentials';
          break;
        default:
          message = 'Something went wrong';
      }

      throw new Error(message);
    }
  }*/

  async fetchData({ url, options}) {
    try {
      const data = await this.fetchJSON(
        `${process.env.API_URL}${url}`,
        options,
      );
      console.log('fetchData in abstractService ', data);

      return { payload: data };
    } catch (error) {
      let message;

      switch (error.status) {
        case 500:
          message = 'Internal Server Error';
          break;
        case 422:
          // eslint-disable-next-line prefer-destructuring
          message = error.message;
          break;
        case 404:
          message = 'Not Found';
          break;
        case 403:
          message = 'Unauthorized';
          break;
        case 401:
          message = 'Invalid credentials';
          break;
        default:
          message = 'Something went wrong';
      }

      throw new Error(message);
    }
  }
}
