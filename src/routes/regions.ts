import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { GuildSettings } from '../models/GuildSettings';

export const getBansByRegion = async (
  client: Client,
  region: string,
): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`regions/${region}`, client.token);
  return { response, status };
};
