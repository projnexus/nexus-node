import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { GuildSettings } from '../models/GuildSettings';

export const getAllGuilds = async function (this: Client): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken('guilds', this.token);
};

export const getGuild = async function (
  this: Client,
  guildId: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guilds/${guildId}`, this.token);
};

export const createGuild = async function (
  this: Client,
  guildSettings: GuildSettings,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guilds`, this.token, 'POST', guildSettings.toJson());
};

export const deleteGuild = async function (
  this: Client,
  guildId: string,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guilds/${guildId}`, this.token, 'DELETE');
};

export const updateGuild = async function (
  this: Client,
  guildId: string,
  guildSettings: GuildSettings,
): Promise<{ response: Response; status: number }> {
  if (!this) throw new Error('Client not initialized');
  return await apiRequestWithToken(`guilds/${guildId}`, this.token, 'PATCH', guildSettings.toJson());
};
