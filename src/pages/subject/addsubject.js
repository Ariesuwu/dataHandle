import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box, Button, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
}));


export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <div>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/subject" className={classes.link}>
        <HomeIcon className={classes.icon} />
        AllSubject
      </Link>
      <Link
        color="inherit"
        href="/addsubject"
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        AddSubject
      </Link>
    </Breadcrumbs>
    <br />
      <Box
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
      <Card
        className={classes.root}
        style={{
          backgroundColor: "white",
          width: "50em",
        }}
        elevation="5"
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Add Subject
          </Typography>
          <Divider />
          <br />
          <form>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                class="form-control"
                id="subject"
              />
            </div>
            <div class="form-group">
              <label for="Code">Code</label>
              <input
                type="text"
                class="form-control"
                id="Code"
              />
            </div>
            <Button variant="contained" style={{ color:"#00c853", border: "1px solid #00c853" }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      </Box>
    </div>
  );
}
