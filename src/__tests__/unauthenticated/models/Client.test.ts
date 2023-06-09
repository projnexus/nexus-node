import { Client } from '../../../models/Client';

describe('Client', () => {
  describe('Is using token', () => {
    test('False', () => {
      const client = new Client({
        token: '1234',
        useToken: false,
        silent: true,
      });

      expect(client.useToken).toBe(false);
    });

    test('True', () => {
      const client = new Client({
        token: '1234',
        useToken: false,
        silent: true,
      });

      expect(client.useToken).toBe(true);
    });
  });

  test('Get token', () => {
    const client = new Client({
      token: '1234',
      useToken: false,
      silent: true,
    });

    expect(client.token).toBe('1234');
  });

  describe('Validate token', () => {
    test('Valid', () => {
      const client = new Client({
        token: '1234',
        useToken: true,
        silent: true,
      });

      expect(client.validateToken()).toBe(true);
    });

    test('Invalid', () => {
      const client = new Client({
        token: '',
        useToken: true,
        silent: true,
      });

      expect(client.validateToken()).toBe(false);
    });
  });

  describe('Authenticate', () => {
    test('Invalid', async () => {
      const client = new Client({
        token: '1234',
        useToken: true,
        silent: true,
      });

      const authenticated = await client.authenticate();
      expect(authenticated).toBe(false);
    });
  });
});
