import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({ message: "Hello from the API route!" });
}

export async function POST(req: Request) {
    const body = await req.json();

    const { name } = body;

    if (!name) {
        return NextResponse.json({ message: "Name is required in the request body." }, { status: 400 });
    }

    return NextResponse.json({ message: `Hello, ${name}, this was sent from the API !` });

}
