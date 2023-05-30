// Models
import { GuildSettings } from './GuildSettings';
import { Region } from './Region';
import { Infraction } from './Infraction';

// Routes
import { testroute } from '../routes/testroute';
import { getAllGuilds, getGuild, createGuild, deleteGuild, updateGuild } from '../routes/guilds';
import {
  getAllInfractions,
  getInfraction,
  createInfraction,
  deleteInfraction,
  updateInfraction,
} from '../routes/infractions';
import { getBansByRegion } from '../routes/regions';
import { createKey } from '../routes/admin';
import { getAllUsers, getUser, deleteUser } from '../routes/users';

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
    test: testroute,
    guilds: {
      getAll: getAllGuilds,
      get: getGuild,
      create: createGuild,
      delete: deleteGuild,
      update: updateGuild,
    },
    infractions: {
      getAll: getAllInfractions,
      get: getInfraction,
      create: createInfraction,
      delete: deleteInfraction,
      update: updateInfraction,
    },
    users: {
      getAll: getAllUsers,
      get: getUser,
      delete: deleteUser,
    },
    regions: {
      get: getBansByRegion,
    },
    admin: {
      createKey,
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
    const { response, status } = await testroute(this);
    return status === 200;
  }
}
