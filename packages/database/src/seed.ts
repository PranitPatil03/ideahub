import { prisma } from "./client";

(async () => {
  try {
    console.log("1");
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
