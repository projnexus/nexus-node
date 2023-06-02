import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { GuildSettings } from '../models/GuildSettings';

/**
 * Get the amount of guilds Nexus is in
 *
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getGuildCount = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken('guilds/count', this.token);
};

/**
 * Get the information of a guild
 *
 * @param guildId
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const getGuild = async function (
  this: Client,
  guildId: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guild/${guildId}`, this.token);
};

/**
 * Create a new guild
 *
 * @param guildSettings
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 * @see {@link GuildSettings}
 */
export const createGuild = async function (
  this: Client,
  guildSettings: GuildSettings,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guild`, this.token, 'POST', guildSettings.toJson());
};

/**
 * Delete a guild
 *
 * @param guildId
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 */
export const deleteGuild = async function (
  this: Client,
  guildId: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guild/${guildId}`, this.token, 'DELETE');
};

/**
 * Update a guild
 *
 * @param guildId
 * @param guildSettings
 * @memberof Client
 * @throws {Error} Client not initialized
 * @returns {Promise<{ response: Response; status: number }>}
 * @see {@link GuildSettings}
 */
export const updateGuild = async function (
  this: Client,
  guildId: string,
  guildSettings: GuildSettings,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guild/${guildId}`, this.token, 'PATCH', guildSettings.toJson());
};
