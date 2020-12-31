import React, { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import DDrawer from "./Drawer";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { useDispatch, useSelector } from "react-redux";
import { signOutHandler } from '../../redux/actions/user';

import { auth as googleAuth } from '../../utils/firebase/firebase.utils';

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
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
  const dispatch = useDispatch();
  const user = useSelector(({  user }) => user.user);
  const signOut = () => {
    window.localStorage.clear()
    googleAuth.signOut();
    dispatch(signOutHandler());
    handleClose();
  };
  
  return (
    <>
      <AppBar position="static" style={{ background: "#393A44" }}>
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
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flex: " 1 1 40rem",
              }}
            >
              <Link href="/">
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "calc(1rem + 1vw)",
                  }}
                >
                  Lux Journey
                </a>
              </Link>
            </div>
            <Grid
              container
              style={{
                flex: " 1, 1, 40rem",
                alignItems: "center",
              }}
            >
              <Grid item lg={9}>
                {[
                  { title: "Khách sạn", slug: "/khach-san" },
                  { title: "Địa điểm", slug: "/dia-diem" },
                  { title: "Trải nghiệm", slug: "/trai-nghiem" },
                  { title: "Liên hệ", slug: "/lien-he" },
                ].map(({ title, slug }) => {
                  return (
                    <Hidden smDown key={slug}>
                      <Link href={`${slug}`}>
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
            {user ? (
              <div>
                <Tooltip title="xem thông tin">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Tài khoản</MenuItem>
                  <MenuItem onClick={() => {
                    signOut()
                  }}>Đăng xuất</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <Tooltip title="Đăng nhập">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <LockOpenIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <Link href="dang-nhap">
                    <a>
                      <MenuItem onClick={handleClose}>Đăng nhập</MenuItem>
                    </a>
                  </Link>
                  <Link href="dang-ky">
                    <a>
                      <MenuItem onClick={handleClose}>Đăng ký</MenuItem>
                    </a>
                  </Link>
                </Menu>
              </div>
            )}
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
