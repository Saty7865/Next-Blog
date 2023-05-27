// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "node:fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  // console.log(data)
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < req.query.count; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log(myfile)
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json({ allCount, allBlogs });
}
