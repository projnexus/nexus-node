import { Region } from './Region';

export class User {
    id: string;
    identifiers: string[];
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: string,
        identifiers: string[],
        createdAt: Date,
        updatedAt: Date,
    ) {
        this.id = id;
        this.identifiers = identifiers;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static fromJson(json: any): User {
        return new User(
            json.id,
            json.identifiers,
            json.createdAt,
            json.updatedAt,
        );
    }

    public toJson(): any {
        return {
            id: this.id,
            identifiers: this.identifiers,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
