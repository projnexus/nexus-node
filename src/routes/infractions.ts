import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { Infraction } from '../models/Infraction';

export const getAllInfractions = async (client: Client): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken('infractions', client.token);
  return { response, status };
};

export const getInfraction = async (
  client: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`infractions/${infractionId}`, client.token);
  return { response, status };
};

export const createInfraction = async (
  client: Client,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`infractions`, client.token, 'POST', infraction.toJson());
  return { response, status };
};

export const deleteInfraction = async (
  client: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`infractions/${infractionId}`, client.token, 'DELETE');
  return { response, status };
};

export const updateInfraction = async (
  client: Client,
  infractionId: string,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(
    `infractions/${infractionId}`,
    client.token,
    'PATCH',
    infraction.toJson(),
  );
  return { response, status };
};
