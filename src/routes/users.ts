import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { User } from '../models/User';

export const getAllUsers = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return apiRequestWithToken('users', this.token);
};

export const getUser = async function (this: Client, userId: string): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return apiRequestWithToken(`users/${userId}`, this.token);
};

export const deleteUser = async function (this: Client, user: User): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return apiRequestWithToken(`users/${user.id}`, this.token, 'DELETE');
};
