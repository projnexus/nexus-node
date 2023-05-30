export class Infraction {
    id: string;
    userId: string;
    regions: string[];
    reason: string;
    proof: string;
    executorId: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, userId: string, regions: string[], reason: string, proof: string, executorId: string, active: boolean, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.userId = userId;
        this.regions = regions;
        this.reason = reason;
        this.proof = proof;
        this.executorId = executorId;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static fromJson(json: any): Infraction {
        return new Infraction(json.id, json.userId, json.regions, json.reason, json.proof, json.executorId, json.active, json.createdAt, json.updatedAt);
    }

    public toJson(): any {
        return {
            id: this.id,
            userId: this.userId,
            regions: this.regions,
            reason: this.reason,
            proof: this.proof,
            executorId: this.executorId,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}