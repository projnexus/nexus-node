import { Infraction } from "../index";

describe('Infraction', () => {
    test("Plain Creation", () => {
        const infraction = new Infraction("id", "userId", ["region"], "reason", "proof", "executorId", true, new Date(), new Date());
        expect(infraction.id).toBe("id");
        expect(infraction.userId).toBe("userId");
        expect(infraction.regions).toStrictEqual(["region"]);
        expect(infraction.reason).toBe("reason");
        expect(infraction.proof).toBe("proof");
        expect(infraction.executorId).toBe("executorId");
        expect(infraction.active).toBe(true);
        expect(infraction.createdAt).toBeInstanceOf(Date);
        expect(infraction.updatedAt).toBeInstanceOf(Date);
    });

    test("Creation From JSON", () => {
        const infraction = Infraction.fromJson({
            id: "id",
            userId: "userId",
            regions: ["region"],
            reason: "reason",
            proof: "proof",
            executorId: "executorId",
            active: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        expect(infraction.id).toBe("id");
        expect(infraction.userId).toBe("userId");
        expect(infraction.regions).toStrictEqual(["region"]);
        expect(infraction.reason).toBe("reason");
        expect(infraction.proof).toBe("proof");
        expect(infraction.executorId).toBe("executorId");
        expect(infraction.active).toBe(true);
        expect(infraction.createdAt).toBeInstanceOf(Date);
        expect(infraction.updatedAt).toBeInstanceOf(Date);
    });

    test("Conversion to JSON", () => {
        const infraction = new Infraction("id", "userId", ["region"], "reason", "proof", "executorId", true, new Date(), new Date());
        expect(infraction.toJson()).toStrictEqual({
            id: "id",
            userId: "userId",
            regions: ["region"],
            reason: "reason",
            proof: "proof",
            executorId: "executorId",
            active: true,
            createdAt: infraction.createdAt,
            updatedAt: infraction.updatedAt
        });
    });
});