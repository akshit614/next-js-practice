// file for backend route localhost:3000/api/user
// in next you have to specify api foler for backend creation and should have to name file as route.ts
// like page.tsx for frontend 
// Yes it's opinionated 

import { NextRequest, NextResponse } from "next/server";


export function GET() {
    return Response.json({
        username : "akki",
        password: "akki@123"
    })
}

export async function POST(req : NextRequest) {
    const body = await req.json();
    console.log(body);
    

    return NextResponse.json({ 
        message : "logged in"
    })
}