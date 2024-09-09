import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

//test use clerkMiddleware 
app.get("/hello", clerkMiddleware(), (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json({ message: "Unauthorized" }, 401);
  }
  return c.json({
    message: "Hello Next.js!",
  });
});
// .get('/hello/:test',zValidator("param",z.object({test:z.string()})),(c)=>{
//   const testId = c.req.valid('param')
//   return c.json({message: "Hello" , testId: testId})
// })

// test get and post and check type param and json request to route
// .get('/hello/:test',zValidator("param",z.object({test:z.string()})),(c)=>{
//   const testId = c.req.valid('param')
//   return c.json({message: "Hello" , testId: testId})
// })
// .post('/',
//   zValidator("json",z.object({
//   name:z.string(),
//   age:z.number(),
// })),
//   zValidator("param",z.object({
//     postId : z.number(),
//   }))
// ,(c) => {
//   const {name,age} = c.req.valid('json')
//   const {postId} = c.req.valid('param')
//   return c.json({});
// })

export const GET = handle(app);
export const POST = handle(app);
