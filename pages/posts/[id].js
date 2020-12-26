import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import {
  BlogStyles
} from '../styles';

import { handlerGetPostDetails } from "../../redux/actions/blog";

export default function Post() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const postDetails = useSelector(({ blog }) => blog.postDetails);
  useEffect(() => {
    console.log(id, "called");
    dispatch(handlerGetPostDetails(id));
  }, [id]);
  const render = useMemo(() => {
    if (postDetails) return { __html: postDetails.content };
  }, [postDetails]);
  return (
    <BlogStyles>
      <Container>
        <div dangerouslySetInnerHTML={render} />
      </Container>
    </BlogStyles>
  );
}
