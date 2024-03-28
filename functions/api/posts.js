import posts from './post/data';

export function onRequestGet() {
  console.log(posts);
  return Response.json(posts)
}