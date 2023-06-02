import { GuildSettings } from "../../../models/GuildSettings";
import { Client } from '../../../models/Client';

const client = new Client({
    token: '1234',
    useToken: false,
    silent: true,
})

describe('Guild Route', () => {
  describe('Get guild', () => {
    test('Unauthenticated', async () => {
      const { response, status } = await client.routes.guilds.get('1234');
      expect(status).toBe(401);
    });
  });

  describe('Create guild', () => {
    const guildSettings: GuildSettings = new GuildSettings(
      '1234',
      '1234',
      true,
      true,
      '1234',
      [],
      new Date(),
      new Date(),
    );
    test('Unauthenticated', async () => {
      const { response, status } = await client.routes.guilds.create(guildSettings);
      expect(status).toBe(401);
    });
  });
});
