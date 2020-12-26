import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import MediaCard from "../Components/Card";
import { TraiNghiemStyles } from "./styles";

import { handlerGetPosts } from "../redux/actions/blog";

export default function TraiNghiem(props) {
  const posts = useSelector(({ blog }) => blog.posts);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handlerGetPosts());
  }, []);
  const router = useRouter();
  return (
    <TraiNghiemStyles>
      <div className="top-images">
        <div className="text">
          <h1>Lux Journey Trải nghiệm</h1>
          <p>Bọn mình đến đến, bọn mình trải nghiệm, bọn mình chia sẻ ^^.</p>
        </div>
        <div className="image"></div>
      </div>
      <div></div>
      <h2>Phú Quốc nè</h2>

      <div className="card-wrapper">
        {posts
          ? posts.map((post) => {
              const {
                og_img: { url },
                id,
                title
              } = post || "";
              return (
                <Link href="/posts/[id]" as={`posts/${id}`}>
                  <a>
                    <MediaCard image={`http://localhost:1337${url}`} title={title} />
                  </a>
                </Link>
              );
            })
          : null}
      </div>
    </TraiNghiemStyles>
  );
}
