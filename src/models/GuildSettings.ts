export class GuildSettings {
    id: string;
    guildId: string;
    autoBan: boolean;
    autoUnban: boolean;
    logsChannel: string;
    enabledRegions: string[];
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, guildId: string, autoBan: boolean, autoUnban: boolean, logsChannel: string, enabledRegions: string[], createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.guildId = guildId;
        this.autoBan = autoBan;
        this.autoUnban = autoUnban;
        this.logsChannel = logsChannel;
        this.enabledRegions = enabledRegions;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static fromJson(json: any): GuildSettings {
        return new GuildSettings(json.id, json.guildId, json.auto_ban, json.auto_unban, json.logs_channel, json.enabled_regions, json.createdAt, json.updatedAt);
    }

    public toJson(): any {
        return {
            id: this.id,
            guildId: this.guildId,
            auto_ban: this.autoBan,
            auto_unban: this.autoUnban,
            logs_channel: this.logsChannel,
            enabled_regions: this.enabledRegions,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}