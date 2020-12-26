import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import { BlogStyles } from "../styles";

import { handlerGetPostDetails } from "../../redux/actions/blog";

export default function Post() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const postDetails = useSelector(({ blog }) => blog.postDetails);
  const { url } = postDetails && postDetails.og_img ? postDetails.og_img : "";
  useEffect(() => {
    console.log(id, "called");
    dispatch(handlerGetPostDetails(id));
  }, [id]);
  const render = useMemo(() => {
    if (postDetails) return { __html: postDetails.content };
  }, [postDetails]);
  const coverUrl = url ? `http://localhost:1337${url}` : "";
  return (
    <BlogStyles>
      {coverUrl ? (
        <div
          style={{
            background: `url(${coverUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            minHeight: "70vh",
            marginBottom: "3rem",
          }}
        ></div>
      ) : null}
        
        <div style={{
          width: '80%',
          margin: 'auto'
        }} dangerouslySetInnerHTML={render} />
    </BlogStyles>
  );
}
