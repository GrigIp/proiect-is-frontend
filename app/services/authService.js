import { AbstractAPIService } from "./abstractAPIService";

export class AuthService extends AbstractAPIService {
  async authorize({ username, password, remember }) {
    const body = {username, password};

    const { payload: data } = await this.post('/login', body);

    if (data.token) {
      localStorage.setItem('token', data.token);

      const user = data.user;

      this.currentRole = data.role;
    }

    return data;
  }

  getCurrentLevel() {
    return this.currentRole;
  }
}

const authService = new AuthService();
export default authService;
