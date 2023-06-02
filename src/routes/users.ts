import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { User } from '../models/User';

export const getUserCount = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken('users/count', this.token);
};

export const getAllUsers = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return apiRequestWithToken('users', this.token);
};

export const getUser = async function (
  this: Client,
  userId?: string,
  identifiers?: string[],
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  if (!userId && !identifiers) throw new Error('No user ID or identifiers provided');
  if (userId) return apiRequestWithToken(`user`, this.token, `{ "id": "${userId}" }`);
  if (identifiers) return apiRequestWithToken(`user`, this.token, `{ "identifiers": ${identifiers} }`);
  throw new Error('Invalid state: No matching condition found');
};

export const deleteUser = async function (this: Client, user: User): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return apiRequestWithToken(`user/${user.id}`, this.token, 'DELETE');
};

export const updateUser = async function (
    this: Client,
    user: User,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`user/${user.id}`, this.token, 'PATCH', user.toJson());
};
