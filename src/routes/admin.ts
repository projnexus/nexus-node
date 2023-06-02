import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

/**
 * Get the data of a key
 *
 * @param key
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getKey = async function (this: Client, key: string): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key/${key}`, this.token);
};

/**
 * Create a new key
 *
 * @param data
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const createKey = async function (this: Client, data: object): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key`, this.token, 'POST', data);
};

/**
 * Delete a key
 *
 * @param key
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const deleteKey = async function (this: Client, key: string): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key/${key}`, this.token, 'DELETE');
};

/**
 * Update a key
 *
 * @param key
 * @param data
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const updateKey = async function (
  this: Client,
  key: string,
  data: object,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`admin/key/${key}`, this.token, 'PUT', data);
};
