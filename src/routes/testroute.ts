import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const testroute = async (client: Client): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken('testroute', client.token);
  return { response, status };
};
