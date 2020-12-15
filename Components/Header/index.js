import _ from "lodash";
import { useRouter } from "next/router";
import Link from "next/link";

import { NavigationsStyled } from "../styles";
import DNavbar from "./Navbar";
export default function Header({ navigations }) {
  return (
    <>
      <NavigationsStyled>
        <DNavbar />
      </NavigationsStyled>
    </>
  );
}
