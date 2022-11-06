import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, Divider } from "@material-ui/core";

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
    maxWidth: "100em",
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
        <Link color="inherit" href="/addsubject" className={classes.link}>
          <WhatshotIcon className={classes.icon} />
          AddSubject
        </Link>
      </Breadcrumbs>
      <br />
      <Card
        className={classes.root}
        style={{
          backgroundColor: "white",
        }}
        elevation="5"
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            All Subjects
          </Typography>
          <Divider />
          <br />
          <table
            id="team-list"
            className="table table-striped table-bordered"
            width="100%"
            style={{
              marginTop: "0.5em",
              marginBottom: "0.5em",
            }}
          >
            <thead>
              <th scope="col" style={{ width: "3em" }}>
                sl
              </th>
              <th scope="col" style={{ width: "5em" }}>
                Subjects
              </th>
              <th scope="col" style={{ width: "5em" }}>
                Code
              </th>
              <th scope="col" style={{ width: "10em" }}>
                Action
              </th>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>English</td>
                <td>0510</td>
                <td>
                  <Button
                    variant="contained"
                    style={{
                      color: "#d50000",
                      border: "1px solid #d50000",
                      marginRight: "3px",
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      color: "#00c853",
                      border: "1px solid #00c853",
                      marginLeft: "3px",
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
