import React from 'react';
import clsx from 'clsx';
import { Switch, Route, Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import Home from '../pages/home'
import Addstudent from '../pages/student/addstudent'
import Editstudent from '../pages/student/editstudent'
import Allstudent from '../pages/student/allstudent'
import AllTeacher from '../pages/teachers/teachers'
import AddTeacher from '../pages/teachers/addteacher'
import EditTeacher from '../pages/teachers/editteacher'
import Grade from '../pages/grade/grade'
import AddGrade from '../pages/grade/addgrade'
import School from '../pages/school/school'
import AddSchool from '../pages/school/addschool'
import Subject from '../pages/subject/subject'
import AddSubject from '../pages/subject/addsubject'
import Sllabys from '../pages/sllabys/sllabys'
import AddSllabys from '../pages/sllabys/addsllabys'

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Student DATA
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="home">
            <ListItemIcon><AppsIcon /></ListItemIcon>
            <Link to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button key="AllStudent">
            <ListItemIcon><PeopleAltIcon /></ListItemIcon>
            <Link to="/allstudent">
              <ListItemText primary="Students" />
            </Link>
          </ListItem>
          <ListItem button key="AllTeacher">
            <ListItemIcon><PeopleAltIcon /></ListItemIcon>
            <Link to="/allteacher">
              <ListItemText primary="Teachers" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button key="grade">
            <ListItemIcon><AppsIcon /></ListItemIcon>
            <Link to="/grade">
              <ListItemText primary="Grade" />
            </Link>
          </ListItem>
          <ListItem button key="school">
            <ListItemIcon><AppsIcon /></ListItemIcon>
            <Link to="/school">
              <ListItemText primary="School" />
            </Link>
          </ListItem>
          <ListItem button key="subject">
            <ListItemIcon><AppsIcon /></ListItemIcon>
            <Link to="/subject">
              <ListItemText primary="Subject" />
            </Link>
          </ListItem>
          <ListItem button key="sllabys">
            <ListItemIcon><AppsIcon /></ListItemIcon>
            <Link to="/sllabys">
              <ListItemText primary="Sllabys" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/allstudent">
            <Allstudent />
          </Route>
          <Route exact path="/addstudent">
            <Addstudent />
          </Route>
          <Route exact path="/editstudent">
            <Editstudent />
          </Route>
          <Route exact path="/allteacher">
            <AllTeacher />
          </Route>
          <Route exact path="/addteacher">
            <AddTeacher />
          </Route>
          <Route exact path="/editteacher">
            <EditTeacher />
          </Route>
          <Route exact path="/grade">
            <Grade />
          </Route>
          <Route exact path="/addgrade">
            <AddGrade />
          </Route>
          <Route exact path="/school">
            <School />
          </Route>
          <Route exact path="/addschool">
            <AddSchool />
          </Route>
          <Route exact path="/subject">
            <Subject />
          </Route>
          <Route exact path="/addsubject">
            <AddSubject />
          </Route>
          <Route exact path="/sllabys">
            <Sllabys />
          </Route>
          <Route exact path="/addsllabys">
            <AddSllabys />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
