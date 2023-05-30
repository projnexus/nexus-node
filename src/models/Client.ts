// Models
import { GuildSettings } from './GuildSettings';
import { Region } from './Region';
import { Infraction } from './Infraction';

// Routes
import { test } from '../routes/test';
import { getAllGuilds, getGuild, createGuild, deleteGuild, updateGuild } from '../routes/guilds';

export class Client {
  public token: string;
  public useToken: boolean;
  public silent: boolean;

  public models = {
    GuildSettings,
    Region,
    Infraction,
  };

  public routes = {
    test,
    guilds: {
      getAll: getAllGuilds,
      get: getGuild,
      create: createGuild,
      delete: deleteGuild,
      update: updateGuild,
    },
  };

  constructor(token: string = '0', useToken: boolean = false, silent: boolean = false) {
    this.token = token;
    this.useToken = useToken;
    this.silent = silent;

    if (!this.silent) {
      if (this.useToken && !this.validateToken()) {
        console.log('You must provide a valid token to use the API.');
      } else if (this.useToken) {
        console.log('The token you provided is invalid.');
      } else {
        console.log('You are not using a token to authenticate with the API.');
      }

      console.log('Connected to API');
    }
  }

  public validateToken(): boolean {
    return this.token.length > 0;
  }

  public async authenticate(): Promise<boolean> {
    const { response, status } = await test(this);
    return status === 200;
  }
}
