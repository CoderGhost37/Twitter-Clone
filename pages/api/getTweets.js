import { groq } from 'next-sanity';
import { client } from '../../utils/client';

const tweetQuery = groq`
  *[_type == "tweet"] {
      _id,
      ...,
    } | order(_createdAt desc)`;

export default async function handler(req, res) {
  const tweets = await client.fetch(tweetQuery);

  res.status(200).json(tweets);
}

