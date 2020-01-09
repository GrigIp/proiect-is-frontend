import { AbstractAPIService } from './abstractAPIService';

export class UserService extends AbstractAPIService {
  fetchUser() {
    return this.get('/user');
  }
}
