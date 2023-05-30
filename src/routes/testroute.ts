import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const testroute = async (client: Client): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken('test', client.token).then((res) => {
    return res;
  });
