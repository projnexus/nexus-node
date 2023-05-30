export class Region {
    displayName: string;
    identifier: string;

    constructor(displayName: string, identifier: string) {
        this.displayName = displayName;
        this.identifier = identifier;
    }

    static getAllRegions(): Region[] {
        return Object.values(RegionEnum);
    }

    static getRegionByIdentifier(identifier: string): Region {
        for (const region of Object.values(RegionEnum)) {
            if (region.identifier === identifier) {
                return region;
            }
        }
        throw new Error("Invalid region identifier: " + identifier);
    }
}

export const RegionEnum = {
    EUROPE: new Region("Europe", "europe"),
    NORTH_AMERICA: new Region("North America", "na"),
    SOUTH_AMERICA: new Region("South America", "sa"),
    ASIA: new Region("Asia", "asia"),
    AFRICA: new Region("Africa", "africa"),
    OCEANIA: new Region("Oceania", "oceania"),
};