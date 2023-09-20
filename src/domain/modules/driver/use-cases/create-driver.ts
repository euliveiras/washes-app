import { Driver } from "../entities/Driver";

type CreateDriverProps = {
    name: string;
    phones?: string[];
    organizationId?: string;
};

export class CreateDriver {
    async execute(data: CreateDriverProps): Promise<{ driver: Driver }> {
        const driver = new Driver(data);
        return { driver };
    }
}
