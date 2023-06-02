import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { Infraction } from '../models/Infraction';

/**
 * Get the amount of infractions Nexus has
 *
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getInfractionCount = async function (this: Client): Promise<{ response: Response; status: number }> {
    if (!this) throw new Error('Client not initialized');
    return await apiRequestWithToken('infractions/count', this.token);
}

/**
 * Get all Nexus' infractions
 *
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getAllInfractions = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken('infractions', this.token);
};

/**
 * Get the information of an infraction
 *
 * @param infractionId
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getInfraction = async function (
  this: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`infraction/${infractionId}`, this.token);
};

/**
 * Create a new infraction
 *
 * @param infraction
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 * @see {@link Infraction}
 */
export const createInfraction = async function (
  this: Client,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`infraction`, this.token, 'POST', infraction.toJson());
};

/**
 * Delete an infraction
 *
 * @param infractionId
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const deleteInfraction = async function (
  this: Client,
  infractionId: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`infraction/${infractionId}`, this.token, 'DELETE');
};

/**
 * Update an infraction
 *
 * @param infraction
 * @param infractionId
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 * @see {@link Infraction}
 */
export const updateInfraction = async function (
  this: Client,
  infractionId: string,
  infraction: Infraction,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`infraction/${infraction.id}`, this.token, 'PATCH', infraction.toJson());
};
