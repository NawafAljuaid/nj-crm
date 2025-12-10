import { IOrganizationRepository } from "@/domain/organizations/IOrganizationRepository";
import { Organization } from "@/domain/organizations/Organization";

export class InMemoryOrganizationRepository implements IOrganizationRepository {
  private items: Organization[] = [];

  async save(org: Organization): Promise<void> {
    this.items.push(org);
  }

  async findById(id: string): Promise<Organization | null> {
    return this.items.find(item => item.id === id) ?? null;
  }

  async findAll(): Promise<Organization[]> {
    return this.items;
  }

  async update(org: Organization): Promise<void> {
    const index = this.items.findIndex(item => item.id === org.id);
    if (index !== -1) {
      this.items[index] = org;
    }
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter(item => item.id !== id);
  }
}


export const inMemoryOrganizationRepository =
  new InMemoryOrganizationRepository();
