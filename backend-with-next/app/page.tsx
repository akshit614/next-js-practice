import axios from "axios";
// Async components is a feature of next js to fecth details from server to take advantage of SSR, can not be used in client component


const getData = async () => {
  // Adding delay for loading
  await new Promise((r) => {setTimeout(r, 5000);})
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}


// Async component
export default async function Home() {
  const data = await getData();
  return (
    <>
      <div>Hi there...</div>
      <div>Id --- {JSON.stringify(data[0].id)}</div>
      <div>Title --- {JSON.stringify(data[0].title)}</div>
    </>
  );
}