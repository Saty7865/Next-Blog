import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "node:fs";

//Step1: Collect all files from blogdata directory
//Step2: Iterate and Display them

export const getStaticProps = async (context) => {
  let data = await fs.promises.readdir("blogdata");
  // console.log(data)
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log(myfile)
    allBlogs.push(JSON.parse(myfile));
  }

  return { props: { allBlogs } };
};

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
