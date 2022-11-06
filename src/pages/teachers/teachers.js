import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, Divider } from "@material-ui/core";
import StudentNav from "./nav";
const useStyles = makeStyles((theme) => ({
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

export default function Teachers() {
  const classes = useStyles();

  return (
    <div>
      <StudentNav />
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
            All Teachers
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
              <th scope="col" style={{ width: "1em" }}>
                sl
              </th>
              <th scope="col" style={{ width: "5em" }}>
                Teachers Name
              </th>
              <th scope="col" style={{ width: "4em" }}>
                Phone No.
              </th>
              <th scope="col" style={{ width: "5em" }}>
                Email
              </th>
              <th scope="col" style={{ width: "10em" }}>
                Teaching subject
              </th>
              <th scope="col" style={{ width: "15em" }}>
                Actions
              </th>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>sarwar</td>
                <td>01532863549</td>
                <td>sarwar@gmail.com</td>
                <td>physics, Chemistry</td>
                <td>
                  <Button
                    variant="contained"
                    style={{
                      color: "#673ab7",
                      border: "1px solid #673ab7",
                      marginLeft: "3px",
                    }}
                  >
                    Details
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
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
