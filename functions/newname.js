import firstData from "../../data/first.txt";
import familyData from "../../data/family.txt";

export async function onRequest(context) {
  const width = 16;
  const firstCount = firstData.length / width;
  const lastCount = familyData.length / width;

  const randFirst = Math.floor(Math.random() * firstCount);
  const randLast = Math.floor(Math.random() * lastCount);

  const first = firstData.slice(randFirst * width, randFirst * width + width).trim();
  const last  = familyData.slice(randLast * width, randLast * width + width).trim();

  return new Response(`${first} ${last}\n`, {
    headers: { "content-type": "text/plain" },
  });
}
