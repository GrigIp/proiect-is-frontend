import { AbstractAPIService } from './abstractAPIService';

export class GradesService extends AbstractAPIService {
  fetchGrades(username, role) {
    return this.post('/groups', {username, role});
  }
}
