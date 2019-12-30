import { AbstractAPIService } from './abstractAPIService';

export class ScheduleService extends AbstractAPIService {
  fetchSchedule(username, role) {
    return this.get(`/schedule/?username=${username}&role=${role}`);
  }
}
