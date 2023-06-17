import crypt from "bcrypt";

type HashManipulator = {
    compareStrToHashedStr(str1: string, hash: string): Promise<boolean>;
    generateHashFromStr(str: string): Promise<string>;
};

class wrapper implements HashManipulator {
    async compareStrToHashedStr(str1: string, hash: string): Promise<boolean> {
        const bool = await crypt.compare(str1, hash);

        if (typeof bool === "undefined") {
            throw new Error("Something went wrong in hash process");
        }
        return bool;
    }
    async generateHashFromStr(str: string): Promise<string> {
        const hash = await crypt.hash(str, 10);

        if (!hash) {
            throw new Error("Something went wrong in hash process");
        }
        return hash;
    }
}

export const hashManipulator = new wrapper();
