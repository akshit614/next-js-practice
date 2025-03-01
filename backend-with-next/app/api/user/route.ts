// file for backend route localhost:3000/api/user
// in next you have to specify api foler for backend creation and should have to name file as route.ts
// like page.tsx for frontend 
// Yes it's opinionated 

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET() {
    const user = await client.user.findFirst({})
    return Response.json({
        username : user?.username,
        password: user?.password
    })
}

export async function POST(req : NextRequest) {
    const body = await req.json();
    console.log(body);
    const user = await client.user.create({
        data : {
            username : body.username,
            password : body.password
        }

    })

    console.log(user.id);
    

    return NextResponse.json({ 
        message : "logged in"
    })
}