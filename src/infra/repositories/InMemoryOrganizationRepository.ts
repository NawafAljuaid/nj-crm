import { IOrganizationRepository } from "@/domain/organizations/IOrganizationRepository";
import { Organization } from "@/domain/organizations/Organization";

export class InMemoryOrganizationRepository implements IOrganizationRepository {
    
    private items: Organization[] = [];

    async save(org: Organization): Promise<void> {
        this.items.push(org);
    }

    async findById(id: string): Promise<Organization | null> {

        const result = this.items.find(item => item.id == id);
        return result ?? null;
    }

}