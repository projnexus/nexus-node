import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { Infraction } from '../models/Infraction';

export const getAllInfractions = async function(this: Client): Promise<{ response: Response; status: number }> {
    if (!this) throw new Error('Client not initialized');
    return await apiRequestWithToken('infractions', this.token);
}


export const getInfraction = async function(
  this: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> {
    if (!this) throw new Error('Client not initialized');
    return await apiRequestWithToken(`infractions/${infractionId}`, this.token);
}

export const createInfraction = async function(
  this: Client,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> {
    if (!this) throw new Error('Client not initialized');
    return await apiRequestWithToken(`infractions`, this.token, 'POST', infraction.toJson());
}

export const deleteInfraction = async function(
  this: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> {
    if (!this) throw new Error('Client not initialized');
    return await apiRequestWithToken(`infractions/${infractionId}`, this.token, 'DELETE');
}

export const updateInfraction = async function(
  this: Client,
  infractionId: string,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> {
    if (!this) throw new Error('Client not initialized');
    return await apiRequestWithToken(`infractions/${infraction.id}`, this.token, 'PATCH', infraction.toJson());
}
