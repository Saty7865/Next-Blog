import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

//Step1: Collect all files from blogdata directory
//Step2: Iterate and Display them

export const getServerSideProps = async () => {
  const data = await fetch("http://127.0.0.1:3000/api/blogs?count=5");
  const allBlogsObject = await data.json();

  return { props: { allBlogsObject } };
};

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogsObject.allBlogs);
  const [count, setCount] = useState(3);

  const fetchData = async () => {
    const d = await fetch(`http://127.0.0.1:3000/api/blogs?count=${count + 1}`);
    setCount(count + 1);
    const data = await d.json();
    setBlogs(data.allBlogs);
  };

  return (
    <div>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchData}
          hasMore={props.allBlogsObject.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogitem) => {
            return (
              <div key={blogitem.slug}>
                <Link href={`blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.title}</h3>
                </Link>
                <p className={styles.blogItemp}>{blogitem.metadesc}...</p>
                <Link href={`blogpost/${blogitem.slug}`}>
                  <button className={styles.btn}>Read More</button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export default Blog;
