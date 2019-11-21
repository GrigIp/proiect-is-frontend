import { AbstractAPIService } from "./abstractAPIService";

export class AuthService extends AbstractAPIService {
  async authorize({ username, password, remember }) {
    console.log(username, password, ' in authService');
    const { payload: data } = await this.get('/test');

    if (data.token) {
      localStorage.setItem('token', data.token);

      //const { payload: users } = await this.get('/users');
      //const user = users.find(u => u.email === email);

      this.currentLevel = data.level;
    }

    console.log(data, ' in authService ');

    return data;
  }

  getCurrentLevel() {
    return this.currentLevel;
  }
}

const authService = new AuthService();
export default authService;
