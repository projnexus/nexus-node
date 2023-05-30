import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { User } from '../models/User';

export const getAllUsers = async (client: Client): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken('users', client.token);
  return { response, status };
};

export const getUser = async (client: Client, userId: string): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`users/${userId}`, client.token);
  return { response, status };
};

export const deleteUser = async (client: Client, user: User): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`users/${user.id}`, client.token, 'DELETE');
  return { response, status };
};
