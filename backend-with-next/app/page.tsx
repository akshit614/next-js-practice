// Async components is a feature of next js to fecth details from server to take advantage of SSR, can not be used in client component
import client from "@/db"

const getData = async () => {
  // Adding delay for loading
  // await new Promise((r) => {setTimeout(r, 5000);})
  try {
    const user = await client.user.findFirst({});
	  return {
      username: user?.username,
      password: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}


// Async component
export default async function Home() {
  const data = await getData();
  return (
    <>
      <div>Hi there...</div>
      <div>Id --- {JSON.stringify(data?.username)}</div>
      <div>Title --- {JSON.stringify(data?.password)}</div>
    </>
  );
}