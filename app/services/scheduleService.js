import { AbstractAPIService } from './abstractAPIService';

export class ScheduleService extends AbstractAPIService {
  fetchSchedule(username, role) {
    let routeParam;
    if(role === "PROFESSOR") {
      routeParam = 'teacher';
    } else {
      routeParam = 'student';
    }

    return this.get(`/schedule/${routeParam}/${username}`);
  }
}
