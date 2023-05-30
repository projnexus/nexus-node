import { getAllGuilds, getGuild, createGuild } from '../../routes/guilds';
import { Client } from '../../models/Client';
import {GuildSettings} from "../../models/GuildSettings";

const unauthenticatedClient = new Client('1234', false, true);
//! Uncomment if you want to test authenticated routes
// const authenticatedClient = new Client('', true, true);

describe('Guild Route', () => {
  describe('Get all guilds', () => {
    test('Unauthenticated', async () => {
      const { response, status } = await getAllGuilds(unauthenticatedClient);
      console.log(response);
      expect(status).toBe(401);
    });
    // test('Authenticated', async () => {
    //     const { response, status } = await getAllGuilds(authenticatedClient);
    //     expect(status).toBe(200);
    //     expect(status).toBe(200);
    // });
  });

  describe('Get guild', () => {
    test('Unauthenticated', async () => {
      const { response, status } = await getGuild(unauthenticatedClient, '1234');
      expect(status).toBe(401);
    });
    // test('Authenticated', async () => {
    //     const { response, status } = await getAllGuilds(authenticatedClient);
    //     expect(status).toBe(200);
    // });
  });

  describe('Create guild', () => {
    const guildSettings: GuildSettings = new GuildSettings('1234', '1234', true, true, '1234', [], new Date(), new Date());
    test('Unauthenticated', async () => {
      const { response, status } = await createGuild(unauthenticatedClient, guildSettings);
      expect(status).toBe(401);
    });
    // test('Authenticated', async () => {
    //     const { response, status } = await createGuild(authenticatedClient, guildSettings);
    //     expect(status).toBe(200);
    // });
  });
});
