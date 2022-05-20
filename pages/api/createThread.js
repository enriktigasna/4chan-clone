// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../db"; 
import { withAuth } from "../../middleware/withAuth"

const handler = async (req, res) => {
    if(!req.body.body) return res.json({ error: "Missing body" });
    if(!req.body.board) return res.json({ error: "Missing board" });
    
    const board = await prisma.Board.findUnique({
        where: {
            slug: req.body.board
        }
    });
    if (!board) return res.json({ error: "Board not found" });

    console.log(req.user)

    const thread = await prisma.Thread.create({
        data: {
            body: req.body.body,
            Board: {
                connect: {
                    slug: board.slug
                }
            },
            User: {
                connect: {
                    id: req.user.id,
                }
            }
        }
    })

    res.status(200).json(thread)
}

export default withAuth(handler);