import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import DDrawer from "./Drawer";

import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBackground: {
    background: "#393A44",
  },
  linkMargin: {
    marginRight: "20px",
    color: "white",
    textDecoration: "none",
  },
  list: {
    width: 250,
  },
}));

export default function DNavbar({ navigations }) {
  const router = useRouter();
  const currentSlug = router.asPath;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <AppBar position="fixed" style={{ background: "#393A44" }}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Container style = {{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div style = {{
              flex: ' 1 1 40rem'
            }}>
              <Link href="/">
                <a style={{ 
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: 'calc(1rem + 1vw)'
                }}>Lux Journey</a>
              </Link>
            </div>
            <Grid container style = {{
              flex: ' 1, 1, 40rem',
              alignItems: 'center'
            }}>
              <Grid item lg={9}>
                {[
                  { title: "Khách sạn", slug: "/khach-san" },
                  { title: "Địa điểm", slug: "/dia-diem" },
                  { title: "Trải nghiệm", slug: "/trai-nghiem" },
                  { title: "Liên hệ", slug: "/lien-he" },
                ].map(({ title, slug }) => {
                  return (
                    <Hidden smDown key={slug}>
                      <Link href={`${slug}`} >
                        <a
                          className={clsx(`${classes.linkMargin} `, {
                            active: currentSlug === `/${slug}`,
                          })}
                        >
                          {title}
                        </a>
                      </Link>
                    </Hidden>
                  );
                })}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <DDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        navigations={navigations}
      />
    </>
  );
}
