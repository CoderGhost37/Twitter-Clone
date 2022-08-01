export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: 'tweet',
          text: data.text,
          username: data.username,
          profileImg: data.profileImg,
          img: data.img,
        },
      },
    ],
  };

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-10/data/mutate/production`;

  await fetch(apiEndpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: 'POST',
  });

  res.status(200).json({ message: 'Done!' });
}

