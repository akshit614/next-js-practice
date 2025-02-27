// file for backend route localhost:3000/api/user

export function GET() {
    return Response.json({
        username : "akki",
        password: "akki@123"
    })
}