import { Region } from "./Region";

export class Infraction {
    id: string;
    userId: string;
    regions: Region[];
    reason: string;
    proof: string;
    executor: number;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, userId: string, regions: Region[], reason: string, proof: string, executor: number, active: boolean, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.userId = userId;
        this.regions = regions;
        this.reason = reason;
        this.proof = proof;
        this.executor = executor;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static fromJson(json: any): Infraction {
        const regionsArray: string[] = json.regions;
        if (regionsArray != null) {
            const regions: Region[] = [];
            for (const regionString of regionsArray) {
                const region: Region | undefined = Region.getRegionByIdentifier(regionString);
                if (region) {
                    regions.push(region);
                }
            }
            json.regions = regions;
        }

        return new Infraction(json.id, json.infractionUserId, json.regions, json.reason, json.proof, json.executor, json.active, json.createdAt, json.updatedAt);
    }

    public toJson(): any {
        const regions: string[] = [];
        for (const region of this.regions) {
            regions.push(region.identifier);
        }

        return {
            id: this.id,
            infractionUserId: this.userId,
            regions: regions,
            reason: this.reason,
            proof: this.proof,
            executor: this.executor,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}