// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";
import { withAuth } from "../../middleware/withAuth";
const Joi = require("joi");

const handler = async (req, res) => {
  const schema = Joi.object({
    board: Joi.string().required(),
    page: Joi.number()
  });
  const { error, value } = schema.validate(req.query);
  if (error) return res.json({ error: error.details[0].message });

  const page = req.query.page || 1;

  const thread = await prisma.Thread.findMany({
    where: {
      boardSlug: req.query.board,
    },
    orderBy: {
        createdAt: "desc",
    },
    skip: (page - 1) * 10,
    take: 10,
  });

  res.status(200).json(thread);
};

export default withAuth(handler);
