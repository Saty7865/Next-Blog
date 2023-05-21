import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";
import * as fs from "node:fs";

//Step1: Find the file Corresponding to the slug
//Step2: Populate them inside the page

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          name: "next.js",
          slug: "how-to-learn-django",
        },
        params: {
          name: "next.js",
          slug: "how-to-learn-flask",
        },
        params: {
          name: "next.js",
          slug: "how-to-learn-javascript",
        },
        params: {
          name: "next.js",
          slug: "how-to-learn-nextjs",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return { props: { myBlog:JSON.parse(myBlog) } };
};

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export default Slug;
