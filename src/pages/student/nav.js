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

export default function StudentNav() {
  const classes = useStyles();

  return (
    <div>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/allstudent" className={classes.link}>
        <HomeIcon className={classes.icon} />
        AllStudents
      </Link>
      <Link
        color="inherit"
        href="/addstudent"
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        AddStudents
      </Link>
    </Breadcrumbs>
    <br />
    </div>
  );
}
