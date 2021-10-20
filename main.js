import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use(async (context) => {
  await context.send({
    root: Deno.cwd(), // 静态资源的根路径
  });
});

await app.listen({ hostname: '127.0.0.1', port: 8000 });
