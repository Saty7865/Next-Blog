import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";

//Step1: Find the file Corresponding to the slug
//Step2: Populate them inside the page

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const myBlog = await data.json();

  return { props: { myBlog } };
};

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>
    </div>
  );
};

export default Slug;
