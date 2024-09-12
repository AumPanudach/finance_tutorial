import { Hono } from "hono";
import { account } from "@/db/schema";
import { db } from "@/db/drizzle";



const app = new Hono().get('/', async (c) => {
    const data = await db.select({
      id:account.id,
      name:account.name,
    }).from(account);
    return c.json({data});
})

export default app;