import { AbstractAPIService } from './abstractAPIService';

export class GroupService extends AbstractAPIService {
  fetchGroups() {
    return this.get('/groups');
  }

  fetchGroup(id) {
    return this.get(`/group/${id}`);
  }

  fetchGroup() {
    return this.get(`/group/`);
  }


  deleteGroup(id) {
    return this.delete(`/groups/${id}`);
  }

  /*async saveGroup(name, parentId, companyId) {
    const groups = await this.get('/groups');
    if (groups.filter(obj => obj.name === name).length > 0) {
      throw new Error('Name already used');
    }

    return this.post('/groups', { name, parentId, companyId });
  }*/

  updateGroup(id, name, parentId, companyId) {
    return this.put(`/groups/${id}`, { name, parentId, companyId });
  }
}
