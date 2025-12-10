import { NextResponse } from "next/server";
import { inMemoryOrganizationRepository } from "@/infra/repositories/InMemoryOrganizationRepository";
import { GetOrganizationUseCase } from "@/application/organizations/GetOrganizationUseCase";
import { NotFoundError } from "@/core/errors/NotFoundError";

const getOrganization = new GetOrganizationUseCase(
  inMemoryOrganizationRepository
);

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = await getOrganization.execute(params.id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
