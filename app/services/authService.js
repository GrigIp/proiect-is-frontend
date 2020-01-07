import { AbstractAPIService } from "./abstractAPIService";
import jwt_decode from 'jwt-decode';

export class AuthService extends AbstractAPIService {
  async authorize({ username, password, remember }) {
    const body = {username, password};

    const { payload: data } = await this.post('/login', body);

    if (data.token) {
      localStorage.setItem('token', data.token);
      console.log(jwt_decode(data.token));

      this.currentRole = data.role;
    }

    return data;
  }

  async register({ firstName, lastName, email, username, password, matchingPassword, role }) {
    const body = { firstName, lastName, email, username, password, matchingPassword, role };

    const { payload: data } = await this.post('/user/registration', body);

    return data;
  }

  getCurrentLevel() {
    return this.currentRole;
  }
}

const authService = new AuthService();
export default authService;
