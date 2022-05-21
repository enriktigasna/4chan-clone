// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";
import { withAuth } from "../../middleware/withAuth";
const Joi = require("joi");

const handler = async (req, res) => {
  const schema = Joi.object({
    thread: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.query);
  if (error) return res.json({ error: error.details[0].message });

  const thread = await prisma.Thread.findUnique({
    where: {
      id: req.query.thread,
    },
  });

  res.status(200).json(thread);
};

export default withAuth(handler);
