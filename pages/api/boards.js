// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
      {
        name: "HGB Finaste",
        slug: "/fin/"
      },
      {
        name: "HGB Exposed",
        slug: "/exp/"
      },
      {
        name: "HGB Fulaste",
        slug: "/ful/"
      },
      {
        name: "HGB Horungar",
        slug: "/hor/"
      }
    ])
}
