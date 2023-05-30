import { GuildSettings } from "../../index";

describe('GuildSettings', () => {
    test("Plain Creation", () => {
        const guildSettings = new GuildSettings("id", "guildId", true, true, "logsChannel", ["region"], new Date(), new Date());
        expect(guildSettings.id).toBe("id");
        expect(guildSettings.guildId).toBe("guildId");
        expect(guildSettings.autoBan).toBe(true);
        expect(guildSettings.autoUnban).toBe(true);
        expect(guildSettings.logsChannel).toBe("logsChannel");
        expect(guildSettings.enabledRegions).toStrictEqual(["region"]);
        expect(guildSettings.createdAt).toBeInstanceOf(Date);
        expect(guildSettings.updatedAt).toBeInstanceOf(Date);
    });

    test("Creation From JSON", () => {
        const guildSettings = GuildSettings.fromJson({
            id: "id",
            guildId: "guildId",
            auto_ban: true,
            auto_unban: true,
            logs_channel: "logsChannel",
            enabled_regions: ["region"],
            createdAt: new Date(),
            updatedAt: new Date()
        });
        expect(guildSettings.id).toBe("id");
        expect(guildSettings.guildId).toBe("guildId");
        expect(guildSettings.autoBan).toBe(true);
        expect(guildSettings.autoUnban).toBe(true);
        expect(guildSettings.logsChannel).toBe("logsChannel");
        expect(guildSettings.enabledRegions).toStrictEqual(["region"]);
        expect(guildSettings.createdAt).toBeInstanceOf(Date);
        expect(guildSettings.updatedAt).toBeInstanceOf(Date);
    });

    test("Conversion to JSON", () => {
        const guildSettings = new GuildSettings("id", "guildId", true, true, "logsChannel", ["region"], new Date(), new Date());
        expect(guildSettings.toJson()).toStrictEqual({
            id: "id",
            guildId: "guildId",
            auto_ban: true,
            auto_unban: true,
            logs_channel: "logsChannel",
            enabled_regions: ["region"],
            createdAt: guildSettings.createdAt,
            updatedAt: guildSettings.updatedAt
        });
    });
});