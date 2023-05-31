import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const createKey = async function (this: Client, data: object): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key`, this.token, 'POST', data);
};
