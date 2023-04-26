import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, Divider } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

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

export default function Grades() {
  const classes = useStyles();
  const [grades, getGrades] = useState('');

  const url = "http://localhost:4000/grades"

  useEffect(() => {
    getAllGrades();
}, []);

  const getAllGrades = () => {
    axios.get(`${url}`)
    .then((response) => {
      const AllGrades = response.data
      console.log(AllGrades);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/grade" className={classes.link}>
          <HomeIcon className={classes.icon} />
          AllGrade
        </Link>
        <Link color="inherit" href="/addgrade" className={classes.link}>
          <WhatshotIcon className={classes.icon} />
          AddGrade
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
              All Grades
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
                  Grade
                </th>
                <th scope="col" style={{ width: "5em" }}>
                  Description
                </th>
                <th scope="col" style={{ width: "10em" }}>
                  Action
                </th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>9</td>
                  <td>dsdad</td>
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
