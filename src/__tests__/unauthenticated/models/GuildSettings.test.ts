import { GuildSettings } from '../../../models/GuildSettings';
import { RegionEnum } from "../../../models/Region";

describe('GuildSettings', () => {
  test('Plain Creation', () => {
    const guildSettings = new GuildSettings(
      'id',
      'guildId',
      true,
      true,
      'logsChannel',
      [RegionEnum.EUROPE],
      new Date(),
      new Date(),
    );
    expect(guildSettings.id).toBe('id');
    expect(guildSettings.guildId).toBe('guildId');
    expect(guildSettings.autoBan).toBe(true);
    expect(guildSettings.autoUnban).toBe(true);
    expect(guildSettings.logsChannel).toBe('logsChannel');
    expect(guildSettings.enabledRegions).toStrictEqual([RegionEnum.EUROPE]);
    expect(guildSettings.createdAt).toBeInstanceOf(Date);
    expect(guildSettings.updatedAt).toBeInstanceOf(Date);
  });

  test('Creation From JSON', () => {
    const guildSettings = GuildSettings.fromJson({
      id: 'id',
      guildId: 'guildId',
      auto_ban: true,
      auto_unban: true,
      logs_channel: 'logsChannel',
      enabled_regions: ['na', 'europe', 'sa'],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    expect(guildSettings.id).toBe('id');
    expect(guildSettings.guildId).toBe('guildId');
    expect(guildSettings.autoBan).toBe(true);
    expect(guildSettings.autoUnban).toBe(true);
    expect(guildSettings.logsChannel).toBe('logsChannel');
    expect(guildSettings.enabledRegions).toStrictEqual([
      RegionEnum.NORTH_AMERICA,
      RegionEnum.EUROPE,
      RegionEnum.SOUTH_AMERICA,
    ]);
    expect(guildSettings.createdAt).toBeInstanceOf(Date);
    expect(guildSettings.updatedAt).toBeInstanceOf(Date);
  });

  test('Conversion to JSON', () => {
    const guildSettings = new GuildSettings(
      'id',
      'guildId',
      true,
      true,
      'logsChannel',
      [RegionEnum.AFRICA, RegionEnum.EUROPE],
      new Date(),
      new Date(),
    );
    expect(guildSettings.toJson()).toStrictEqual({
      id: 'id',
      guildId: 'guildId',
      auto_ban: true,
      auto_unban: true,
      logs_channel: 'logsChannel',
      enabled_regions: ['africa', 'europe'],
      createdAt: guildSettings.createdAt,
      updatedAt: guildSettings.updatedAt,
    });
  });
});
