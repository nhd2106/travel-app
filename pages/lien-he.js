import React from "react";
import { Container, FormControl } from "@material-ui/core";
import { LienHeStyles } from "./styles";

export default function LienHe(props) {
  return (
    <LienHeStyles>
      <div className="form-wrapper">
          <div>
              left
          </div>
          <div>
              right
          </div>

      </div>
    </LienHeStyles>
  );
}
