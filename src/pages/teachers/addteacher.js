import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, Divider, Grid } from "@material-ui/core";
import TeacherNav from "./nav";

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

export default function AddTeacher() {
  const classes = useStyles();

  return (
    <div>
      <TeacherNav />
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
            Add Teacher
          </Typography>
          <Divider />
          <br />
          <form>
            <Grid container direction="row">
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginRight: "5em", marginLeft: "2em" }}
              >
                <div class="form-group">
                  <label for="Teachername">Teacher Name</label>
                  <input type="text" class="form-control" id="Teachername" />
                </div>
                <div class="form-group">
                  <label for="Teacheremail">Teacher Email</label>
                  <input type="text" class="form-control" id="Teacheremail" />
                </div>
                <div class="form-group">
                  <label for="Teachernumber">Teacher Phone no.</label>
                  <input type="text" class="form-control" id="Teachernumber" />
                </div>
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginLeft: "5em", marginRight: "2em" }}
              >
                <div class="form-group">
                  <label for="AnyNotes">AnyNotes</label>
                  <input type="text" class="form-control" id="AnyNotes" />
                </div>
                <div class="form-group">
                  <label>Teaches Grade: </label>
                  <br />
                  <input type="checkbox" style={{ marginRight: "0.5em" }} />
                  <label className="form-check-label">9</label>
                </div>
                <div class="form-group">
                  <label>Teaches Subject:</label>
                  <br />
                  <input type="checkbox" style={{ marginRight: "0.5em" }} />
                  <label className="form-check-label">English</label>
                </div>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              style={{ color: "#00c853", border: "1px solid #00c853" }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
