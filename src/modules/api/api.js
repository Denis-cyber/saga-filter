import { ENDPOINTS } from "modules/api/endpoints";

const BASE_URL = "http://localhost:3001";

class Api {
  constructor(baseUrl, endpoints) {
    this.baseUrl = baseUrl;
    this.endpoints = endpoints;
  }

  async generateRequest(endpoint, data) {
    const { uri, method } = this.endpoints[endpoint];

    return fetch(`${this.baseUrl}${uri}`, { method, body: data });
  }

  async fetch(endpoint, data) {
    const response = await this.generateRequest(endpoint, data);

    return response.json();
  }
}

export default new Api(BASE_URL, ENDPOINTS);
