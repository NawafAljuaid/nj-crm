import { Organization } from "./Organization";

export interface IOrganizationRepository {

    save(organization: Organization): Promise<void>;
    findById(id: string): Promise<Organization | null>;
    findAll(): Promise<Organization[]>;
    update(organization: Organization): Promise<void>;
    delete(id: string): Promise<void>;

}