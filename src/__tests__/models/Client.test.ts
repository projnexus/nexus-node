import { Client } from '../../models/Client';

describe('Client', () => {
  describe('Is using token', () => {
    test('False', () => {
      const client = new Client('1234', false, true);
      expect(client.useToken).toBe(false);
    });

    test('True', () => {
      const client = new Client('1234', true, true);
      expect(client.useToken).toBe(true);
    });
  });

  test('Get token', () => {
    const client = new Client('1234', false, true);
    expect(client.token).toBe('1234');
  });

  describe('Validate token', () => {
    test('Valid', () => {
      const client = new Client('1234', true, true);
      expect(client.validateToken()).toBe(true);
    });

    test('Invalid', () => {
      const client = new Client('', true, true);
      expect(client.validateToken()).toBe(false);
    });
  });

  describe('Authenticate', () => {
    test('Invalid', async () => {
      const client = new Client('', false, true);
      const authenticated = await client.authenticate();
      expect(authenticated).toBe(false);
    });
    // test('Valid', async () => {
    //   const client = new Client('', true, true);
    //   const authenticated = await client.authenticate();
    //   expect(authenticated).toBe(true);
    // });
  });
});
