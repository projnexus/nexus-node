import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { Infraction } from '../models/Infraction';

export const getAllInfractions = async (client: Client): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken('infractions', client.token).then((res) => {
    return res;
  });

export const getInfraction = async (
  client: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`infractions/${infractionId}`, client.token).then((res) => {
    return res;
  });

export const createInfraction = async (
  client: Client,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`infractions`, client.token, 'POST', infraction.toJson()).then((res) => {
    return res;
  });

export const deleteInfraction = async (
  client: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`infractions/${infractionId}`, client.token, 'DELETE').then((res) => {
    return res;
  });

export const updateInfraction = async (
  client: Client,
  infractionId: string,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`infractions/${infractionId}`, client.token, 'PATCH', infraction.toJson()).then((res) => {
    return res;
  });
