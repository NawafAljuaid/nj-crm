import { NextResponse } from "next/server";
import { CreateOrganizationUseCase } from "@/application/organizations/CreateOrganizationUseCase";
import { InMemoryOrganizationRepository } from "@/infra/repositories/InMemoryOrganizationRepository";

const repository = new InMemoryOrganizationRepository();
const CreateOrganization = new CreateOrganizationUseCase(repository);

export async function POST(req: Request) {

    try {
        const body = await req.json();

        if(!body.name) {
        
            return NextResponse.json(
                { error: "Name is required" },
                { status: 400 }
            );
        }

        const result = await CreateOrganization.execute({

            name: body.name,
            businessType: body.businessType

        });

        return NextResponse.json(result, { status: 201 })

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }

}