import crypt from "bcrypt";

export class HashManipulator {
    static async compareStrToHashedStr(str1: string, hash: string): Promise<boolean> {
        const bool = await crypt.compare(str1, hash);

        if (typeof bool === "undefined") {
            throw new Error("Something went wrong in hash process");
        }
        return bool;
    }
    static async generateHashFromStr(str: string): Promise<string> {
        const hash = await crypt.hash(str, 10);

        if (!hash) {
            throw new Error("Something went wrong in hash process");
        }
        return hash;
    }
}
