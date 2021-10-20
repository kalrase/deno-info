/*
 * @Author: liukai
 * @since: 2021-10-20 11:41:12
 * @LastAuthor: liukai
 * @lastTime: 2021-10-20 17:11:26
 */


import { listenAndServe } from 'https://deno.land/std@0.111.0/http/server.ts';

function handler(req) {
  console.log(req,'req')
  if(req=='test')return new Response('hello test!')
  return new Response('Hello world, this is hot reload!');
}

console.log('Listening on http://localhost:8000');
await listenAndServe(':8000', handler);