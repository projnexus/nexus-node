import { apiRequestWithToken } from '../utils/request';

export const test = async (token: string): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken('test', token);
  return { response, status };
};
