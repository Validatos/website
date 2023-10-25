import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  // make call to server with contact info
  return new Response(JSON.stringify({ success: true }));
};
