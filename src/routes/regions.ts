import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const getBansByRegion = async (
  client: Client,
  region: string,
): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`regions/${region}`, client.token).then((res) => {
    return res;
  });
