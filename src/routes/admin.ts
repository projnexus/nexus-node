import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const getKey = async function (this: Client, key: string): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key/${key}`, this.token);
};

export const createKey = async function (this: Client, data: object): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key`, this.token, 'POST', data);
};

export const deleteKey = async function (this: Client, key: string): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key/${key}`, this.token, 'DELETE');
};

export const updateKey = async function (
  this: Client,
  key: string,
  data: object,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key/${key}`, this.token, 'PATCH', data);
};
