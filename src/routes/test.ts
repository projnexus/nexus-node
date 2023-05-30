import { apiRequestWithToken } from '../utils/request';
import { Client } from "../models/Client";

export const test = async (client: Client): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken('test', client.token);
  return { response, status };
};
