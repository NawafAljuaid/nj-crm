import { IOrganizationRepository } from "@/domain/organizations/IOrganizationRepository";
import { NotFoundError } from "@/core/errors/NotFoundError";

export class GetOrganizationUseCase {

    constructor(private readonly repository: IOrganizationRepository) {}

    async execute(id: string) {

        const org = await this.repository.findById(id);
        if (!org) throw new NotFoundError("Organization not found");
        return org;
    }
}