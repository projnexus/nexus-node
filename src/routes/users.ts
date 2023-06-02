import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { User } from '../models/User';

/**
 * Get the amount of users Nexus has
 *
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getUserCount = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken('users/count', this.token);
};

/**
 * Get all Nexus' users
 *
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getAllUsers = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return apiRequestWithToken('users', this.token);
};

/**
 * Get the information of a user
 *
 * @param userId - optional
 * @param identifiers - optional
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getUser = async function (
  this: Client,
  userId?: string,
  identifiers?: string[],
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  if (!userId && !identifiers) throw new Error('No user ID or identifiers provided');
  if (userId) return apiRequestWithToken(`user`, this.token, `{ "id": "${userId}" }`);
  if (identifiers) return apiRequestWithToken(`user`, this.token, `{ "identifiers": ${identifiers} }`);
  throw new Error('Invalid state: No matching condition found');
};

/**
 * Delete a user
 *
 * @param userId
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const deleteUser = async function (
  this: Client,
  userId: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return apiRequestWithToken(`user/${userId}`, this.token, 'DELETE');
};

/**
 * Update a user
 *
 * @param user
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 * @see {@link User}
 */
export const updateUser = async function (this: Client, user: User): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`user/${user.id}`, this.token, 'PUT', user.toJson());
};
