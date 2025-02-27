import axios from "axios";
// Async components is a feature of next js to fecth details from server to take advantage of SSR, can not be used in client component


const getData = async () => {
  // Adding delay for loading
  // await new Promise((r) => {setTimeout(r, 5000);})
  const res = await axios.get('http://localhost:3000/api/user');
  return res.data;
}


// Async component
export default async function Home() {
  const data = await getData();
  return (
    <>
      <div>Hi there...</div>
      <div>Id --- {JSON.stringify(data.username)}</div>
      <div>Title --- {JSON.stringify(data.password)}</div>
    </>
  );
}