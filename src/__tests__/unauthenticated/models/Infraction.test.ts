import { Infraction } from '../../../models/Infraction';
import { RegionEnum } from '../../../models/Region';

describe('Infraction', () => {
  test('Plain Creation', () => {
    const infraction = new Infraction(
      'id',
      'userId',
      [RegionEnum.NORTH_AMERICA, RegionEnum.SOUTH_AMERICA],
      'reason',
      'proof',
      1,
      true,
      new Date(),
      new Date(),
    );
    expect(infraction.id).toBe('id');
    expect(infraction.userId).toBe('userId');
    expect(infraction.regions).toStrictEqual([RegionEnum.NORTH_AMERICA, RegionEnum.SOUTH_AMERICA]);
    expect(infraction.reason).toBe('reason');
    expect(infraction.proof).toBe('proof');
    expect(infraction.executor).toBe(1);
    expect(infraction.active).toBe(true);
    expect(infraction.createdAt).toBeInstanceOf(Date);
    expect(infraction.updatedAt).toBeInstanceOf(Date);
  });

  test('Creation From JSON', () => {
    const infraction = Infraction.fromJson({
      id: 'id',
      infractionUserId: 'userId',
      regions: ['oceania', 'africa'],
      reason: 'reason',
      proof: 'proof',
      executor: 1,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    expect(infraction.id).toBe('id');
    expect(infraction.userId).toBe('userId');
    expect(infraction.regions).toStrictEqual([RegionEnum.OCEANIA, RegionEnum.AFRICA]);
    expect(infraction.reason).toBe('reason');
    expect(infraction.proof).toBe('proof');
    expect(infraction.executor).toBe(1);
    expect(infraction.active).toBe(true);
    expect(infraction.createdAt).toBeInstanceOf(Date);
    expect(infraction.updatedAt).toBeInstanceOf(Date);
  });

  test('Conversion to JSON', () => {
    const infraction = new Infraction(
      'id',
      'userId',
      [RegionEnum.SOUTH_AMERICA, RegionEnum.EUROPE],
      'reason',
      'proof',
      1,
      true,
      new Date(),
      new Date(),
    );
    expect(infraction.toJson()).toStrictEqual({
      id: 'id',
      infractionUserId: 'userId',
      regions: ['sa', 'europe'],
      reason: 'reason',
      proof: 'proof',
      executor: 1,
      active: true,
      createdAt: infraction.createdAt,
      updatedAt: infraction.updatedAt,
    });
  });
});
