import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';
import {GuildSettings} from "../models/GuildSettings";

export const getAllGuilds = async (client: Client): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken('guilds', client.token);
  return { response, status };
};

export const getGuild = async (client: Client, guildId: string): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`guilds/${guildId}`, client.token);
  return { response, status };
};

export const createGuild = async (client: Client, guildSettings: GuildSettings): Promise<{ response: Response; status: number }> => {
  const { response, status } = await apiRequestWithToken(`guilds`, client.token, 'POST', guildSettings.toJson());
    return { response, status };
};