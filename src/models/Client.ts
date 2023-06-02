//// Welcome to the extremely messy Node adapter
//// This is a work in progress and will be cleaned up in the future
//// Our priority is to get the Java adapter working first

// Models
import { GuildSettings } from './GuildSettings';
import { Region } from './Region';
import { Infraction } from './Infraction';
import { User } from './User';

// Routes
import { getGuildCount, getGuild, createGuild, deleteGuild, updateGuild } from '../routes/guilds';
import {
  getInfractionCount,
  getAllInfractions,
  getInfraction,
  createInfraction,
  deleteInfraction,
  updateInfraction,
} from '../routes/infractions';
import { getKey, createKey, deleteKey, updateKey } from '../routes/admin';
import { getUserCount, getAllUsers, getUser, deleteUser, updateUser } from '../routes/users';

export class Client {
  public token: string;
  public useToken: boolean;
  public silent: boolean;

  public models = {
    GuildSettings,
    Region,
    Infraction,
    User,
  };

  public routes: {
    guilds: {
      count: () => Promise<{ response: Response; status: number }>;
      get: (guildId: string) => Promise<{ response: Response; status: number }>;
      create: (guildSettings: GuildSettings) => Promise<{ response: Response; status: number }>;
      delete: (guildId: string) => Promise<{ response: Response; status: number }>;
      update: (guildId: string, guildSettings: GuildSettings) => Promise<{ response: Response; status: number }>;
    };
    infractions: {
      count: () => Promise<{ response: Response; status: number }>;
      getAll: () => Promise<{ response: Response; status: number }>;
      get: (infractionId: string) => Promise<{ response: Response; status: number }>;
      create: (infraction: Infraction) => Promise<{ response: Response; status: number }>;
      delete: (infractionId: string) => Promise<{ response: Response; status: number }>;
      update: (infractionId: string, infraction: Infraction) => Promise<{ response: Response; status: number }>;
    };
    users: {
      count: () => Promise<{ response: Response; status: number }>;
      getAll: () => Promise<{ response: Response; status: number }>;
      get: (userId: string) => Promise<{ response: Response; status: number }>;
      delete: (userId: string) => Promise<{ response: Response; status: number }>;
      update: (user: User) => Promise<{ response: Response; status: number }>;
    };
    admin: {
      key: {
        get: (key: string) => Promise<{ response: Response; status: number }>;
        create: (data: object) => Promise<{ response: Response; status: number }>;
        delete: (key: string) => Promise<{ response: Response; status: number }>;
        update: (key: string, data: object) => Promise<{ response: Response; status: number }>;
      };
    };
  } = {
    guilds: {
      count: getGuildCount.bind(this),
      get: getGuild.bind(this),
      create: createGuild.bind(this),
      delete: deleteGuild.bind(this),
      update: updateGuild.bind(this),
    },
    infractions: {
      count: getInfractionCount.bind(this),
      getAll: getAllInfractions.bind(this),
      get: getInfraction.bind(this),
      create: createInfraction.bind(this),
      delete: deleteInfraction.bind(this),
      update: updateInfraction.bind(this),
    },
    users: {
      count: getUserCount.bind(this),
      getAll: getAllUsers.bind(this),
      get: getUser.bind(this),
      delete: deleteUser.bind(this),
      update: updateUser.bind(this),
    },
    admin: {
      key: {
        get: getKey.bind(this),
        create: createKey.bind(this),
        delete: deleteKey.bind(this),
        update: updateKey.bind(this),
      },
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
    const { response, status } = await this.routes.guilds.get('0'); // Since we removed the test route, we can use the guild get route
    return status === 404; // If we get a 404, we're authenticated
  }
}
