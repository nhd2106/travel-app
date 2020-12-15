import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  aTag: {
      color: 'white',
      textDecoration: 'none',
  },
  paperAnchorLeft : {
    background: '#393A44',
  },
  active: {
    color: 'yellow',
  }
});

export default function DDrawer({ open, toggleDrawer, navigations }) {
  const classes = useStyles();
  const router = useRouter();
  const currentSlug = router.asPath;
  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <List>
        {navigations.map(({ Title, Slug }, index) => (
          <ListItem button key={Slug}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={Title} />
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      <List>
      <ListItem >
            <ListItemIcon></ListItemIcon>
            <Link href="[page]" as="dfdfdf">
                  <a><img width="100%" src="/ga-nuong-com-lam-cover.gif"/></a>
                </Link>
          </ListItem>
      {[
          { title: "Khách sạn", slug: '/khach-san'},
          { title: "Địa điểm", slug: '/dia-diem'},
          { title: "Trải nghiệm", slug: '/trai-nghiem'},
          { title: "Liên hệ", slug: '/lien-he'},
      ].map(({ title, slug }, index) => (
          <ListItem button key={slug}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Link href="[page]" as={`/${slug}`}>
                  <a className={clsx(classes.aTag, currentSlug===`/${slug}`? classes.active: '')}>{title}</a>
                </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(
        <React.Fragment >
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            classes={{
              paperAnchorLeft: classes.paperAnchorLeft
            }}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      )}
    </div>
  );
}
