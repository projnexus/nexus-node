import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { User } from '../models/User';

export const getAllUsers = async (client: Client): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken('users', client.token).then((res) => {
    return res;
  });

export const getUser = async (client: Client, userId: string): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`users/${userId}`, client.token).then((res) => {
    return res;
  });

export const deleteUser = async (client: Client, user: User): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`users/${user.id}`, client.token, 'DELETE').then((res) => {
    return res;
  });
