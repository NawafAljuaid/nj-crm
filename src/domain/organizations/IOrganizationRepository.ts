import { Organization } from "./Organization";

export interface IOrganizationRepository {

    save(organization: Organization): Promise<void>;
    findById(id: string): Promise<Organization | null>;

}