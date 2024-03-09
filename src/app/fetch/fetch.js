import md5 from "md5";

const TS = 1;
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
const apiKey = process.env.API_KEY;

export async function getData() {
  const hash = md5(TS + privateKey + publicKey);
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?limit=50&ts=${TS}&apikey=${apiKey}&hash=${hash}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
