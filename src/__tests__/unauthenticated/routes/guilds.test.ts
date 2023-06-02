// import { GuildSettings } from '../../../models/GuildSettings';
// import { Client } from '../../../models/Client';
//
// const unauthenticatedClient = new Client('1234', false, true);
// // Uncomment if you want to testroute authenticated routes
// // const authenticatedClient = new Client('', true, true);
//
// describe('Guild Route', () => {
//   describe('Get all guilds', () => {
//     test('Unauthenticated', async () => {
//       const { response, status } = await unauthenticatedClient.routes.guilds.getAll();
//       expect(status).toBe(401);
//     });
//     // testroute('Authenticated', async () => {
//     //     const { response, status } = await authenticatedClient.routes.guilds.getAll(authenticatedClient);
//     //     expect(status).toBe(200);
//     //     expect(status).toBe(200);
//     // });
//   });
//
//   describe('Get guild', () => {
//     test('Unauthenticated', async () => {
//       const { response, status } = await unauthenticatedClient.routes.guilds.get('1234');
//       expect(status).toBe(401);
//     });
//     // test('Authenticated', async () => {
//     //   const { response, status } = await authenticatedClient.routes.guilds.get('1234');
//     //   expect(status).toBe(401);
//     // });
//   });
//
//   describe('Create guild', () => {
//     const guildSettings: GuildSettings = new GuildSettings(
//       '1234',
//       '1234',
//       true,
//       true,
//       '1234',
//       [],
//       new Date(),
//       new Date(),
//     );
//     test('Unauthenticated', async () => {
//       const { response, status } = await unauthenticatedClient.routes.guilds.create(guildSettings);
//       expect(status).toBe(401);
//     });
//     // testroute('Authenticated', async () => {
//     //     const { response, status } = await authenticatedClient.routes.guild.create(guildSettings);
//     //     expect(status).toBe(200);
//     // });
//   });
// });
