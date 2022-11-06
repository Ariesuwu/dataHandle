import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  }
}));

export default function TeacherNav() {
  const classes = useStyles();

  return (
    <div>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/allteacher" className={classes.link}>
        <HomeIcon className={classes.icon} />
        AllTeachers
      </Link>
      <Link
        color="inherit"
        href="/addteacher"
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        AddTeachers
      </Link>
    </Breadcrumbs>
    <br />
    </div>
  );
}
