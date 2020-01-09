import { AbstractAPIService } from './abstractAPIService';

export class SubjectService extends AbstractAPIService {
  fetchSubject() {
    return this.get('/subject');
  }
}
