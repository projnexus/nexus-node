import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import { GuildSettings } from '../models/GuildSettings';

export const getAllGuilds = async (client: Client): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken('guilds', client.token).then((res) => {
    return res;
  });

export const getGuild = async (client: Client, guildId: string): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`guilds/${guildId}`, client.token).then((res) => {
    return res;
  });

export const createGuild = async (
  client: Client,
  guildSettings: GuildSettings,
): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`guilds`, client.token, 'POST', guildSettings.toJson()).then((res) => {
    return res;
  });

export const deleteGuild = async (client: Client, guildId: string): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`guilds/${guildId}`, client.token, 'DELETE').then((res) => {
    return res;
  });

export const updateGuild = async (
  client: Client,
  guildId: string,
  guildSettings: GuildSettings,
): Promise<{ response: Response; status: number }> =>
  await apiRequestWithToken(`guilds/${guildId}`, client.token, 'PATCH', guildSettings.toJson()).then((res) => {
    return res;
  });
