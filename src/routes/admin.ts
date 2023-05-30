import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const createKey = async (client: Client, data: object): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`admin/key`, client.token, 'POST', data).then((res) => {
    return res;
  });
