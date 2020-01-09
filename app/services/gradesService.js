import { AbstractAPIService } from './abstractAPIService';

export class GradesService extends AbstractAPIService {
  fetchGrades() {
    return this.get('/grades');
  }

  createGrade({username, classId, date, grade}) {
    return this.post('/grades', {student_username: username, class_id: classId, date, grade})
  }
}
