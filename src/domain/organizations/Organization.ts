export type OrganizationProps = {

id: string;
name: string;
businessType?: string;
createdAt: Date;

};

export class Organization {

    private readonly _id: string;
    private _name: string;
    private _businessType?: string;
    private readonly _createdAt: Date;


    constructor(props: OrganizationProps) {

        this._id = props.id;
        this._name = props.name;
        this._businessType = props.businessType;
        this._createdAt = props.createdAt;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        const trimmed = value.trim();

        if(!trimmed) {
            throw new Error("Organizatio name cannot be empty");
        }

        this._name = trimmed;
    }

    get businessType(): string | undefined {
        return this._businessType;
    }

    set businessType(value: string | undefined) {
        this._businessType = value?.trim() || undefined;
    }

    get createdAt(): Date {
        return this._createdAt;
    }
}