const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function main() {
  const boards = await prisma.board.createMany({
    data: [
      {
        name: "HGB Finaste",
        slug: "/fin/",
      },
      {
        name: "HGB Exposed",
        slug: "/exp/",
      },
      {
        name: "HGB Fulaste",
        slug: "/ful/",
      },
      {
        name: "HGB Horungar",
        slug: "/hor/",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
