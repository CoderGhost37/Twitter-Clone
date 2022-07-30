import { groq } from 'next-sanity';
import { client } from '../../utils/client';

const commentQuery = groq`
  *[_type == "comment" && references(*[_type == "tweet" && _id == $tweetId]._id)] {
      _id,
      ...,
    } | order(_createdAt desc)`;

export default async function handler(req, res) {
  const { tweetId } = req.query;

  const comments = await client.fetch(commentQuery, {
    tweetId,
  });

  res.status(200).json(comments);
}

