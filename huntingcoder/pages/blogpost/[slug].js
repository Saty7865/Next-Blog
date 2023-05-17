import React from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, architecto quaerat tenetur blanditiis consectetur sint voluptatem at maxime qui, repellat necessitatibus aliquam quis.</div>
      </main>
    </div>
  );
};

export default Slug;
