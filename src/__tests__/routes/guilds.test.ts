import { getAllGuilds, getGuild } from "../../routes/guilds";
import { Client } from "../../models/Client";

const unauthenticatedClient = new Client('1234', false, true);
//! Uncomment if you want to test authenticated routes
// const authenticatedClient = new Client('', true, false);

describe('Guild Route', () => {
    describe('Get all guilds', () => {
        test('Unauthenticated', async () => {
            const { response, status } = await getAllGuilds(unauthenticatedClient);
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
});
