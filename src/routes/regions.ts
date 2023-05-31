import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const getBansByRegion = async function (
  this: Client,
  region: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`regions/${region}`, this.token);
};
