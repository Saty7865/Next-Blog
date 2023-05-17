import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className="blogItem1">
          <Link href={"blogpost/learn-javascript"}>
            <h3>How to learn JavaScript in 2022?</h3>
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi consectetur eos.</p>
        </div>
        <div className="blogItem2">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi consectetur eos.</p>
        </div>
        <div className="blogItem3">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi consectetur eos.</p>
        </div>
      </main>
    </div>
  );
};

export default blog;
