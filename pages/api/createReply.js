// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db";
import { withAuth } from "../../middleware/withAuth";
const Joi = require("joi");

const handler = async (req, res) => {
  const schema = Joi.object({
    thread: Joi.string().required(),
    body: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) return res.json({ error: error.details[0].message });

  const thread = await prisma.Thread.findUnique({
    where: {
      id: req.body.thread,
    },
  });
  if (!thread) return res.json({ error: "Thread not found" });

  const reply = await prisma.Reply.create({
    data: {
      body: req.body.body,
      Thread: {
        connect: {
          id: thread.id,
        },
      },
      User: {
        connect: {
          id: req.user.id,
        },
      },
    },
  });

  res.status(200).json(reply);
};

export default withAuth(handler);
