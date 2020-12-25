import React from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import { LienHeStyles } from "./styles";

export default function LienHe(props) {
  return (
    <LienHeStyles>
      <div className="form-wrapper">
        <div className="left">left</div>
        <div className="right">
          <FormControl>
            <p>Name</p>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input style={{width:'80%', }} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <p>Email address</p>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input style={{width:'80%', }} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <p>Text</p>
            <InputLabel htmlFor="my-input">Text</InputLabel>
            <Input style={{width:'80%', }} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
      </div>
    </LienHeStyles>
  );
}
