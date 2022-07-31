export default async function handler(req, res) {
  const comment = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: 'comment',
          comment: comment.comment,
          username: comment.username,
          profileImg: comment.profileImg,
          tweet: {
            _type: 'reference',
            _ref: comment.tweetId,
          },
        },
      },
    ],
  };

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-10/data/mutate/production`;

  const result = await fetch(apiEndpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: 'POST',
  });

  const json = await result.json();

  res.status(200).json({ message: 'Done!' });
}

