import { AbstractAPIService } from './abstractAPIService';

export class StudentsService extends AbstractAPIService {
  fetchStudents() {
    return this.get('/students');
  }

  fetchStudent(id) {
    return this.get(`/students/${id}`);
  }

  fetchStudentsByGroupId(id) {
    return this.get(`/students/?groupId=${id}`);
  }

  deleteStudent(id) {
    return this.delete(`/students/${id}`);
  }

  /*updateStudent(id, name, parentId, companyId) {
    return this.put(`/groups/${id}`, { name, parentId, companyId });
  }*/
}
