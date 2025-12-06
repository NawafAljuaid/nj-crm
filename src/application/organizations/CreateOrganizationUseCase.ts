import { IOrganizationRepository } from "@/domain/organizations/IOrganizationRepository";
import { Organization } from "@/domain/organizations/Organization";

export type CreateOrganizationRequest = {

    name: string;
    businessType?: string;
};

export class CreateOrganizationUseCase {

    constructor(private readonly repository: IOrganizationRepository) {}

    async execute(request: CreateOrganizationRequest): Promise<Organization> {
        const id = crypto.randomUUID();
        const createdAt = new Date();
        
        const organization = new Organization({
         id,
         name: request.name,
         businessType: request.businessType,
         createdAt,
        });

        await this.repository.save(organization);

        return organization;
    }
}