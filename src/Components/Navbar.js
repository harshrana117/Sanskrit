// imports for bottom nav
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';


// bottom nav
const useStyles = makeStyles({
  bottomNav: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0px -1px 6px -4px rgba(0,0,0,0.75)',
    backgroundColor:'rgba(63,81,181,0.05)',
    backdropFilter: "blur(8px) saturate(100%) contrast(65%) brightness(130%)",
    zIndex: 100
  }
});



export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav} showLabels={true}>
        <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} component={Link} to={'/'} />
        <BottomNavigationAction label="Learn" value="Learn" icon={<SchoolIcon />} component={Link} to={'/learn'} />
        <BottomNavigationAction label="Compete" value="Compete" icon={<ScheduleIcon />} component={Link} to={'/compete'} />
        <BottomNavigationAction label="Account" value="Account" icon={<PersonIcon />} component={Link} to={'/account'} />
      </BottomNavigation>
    </div>
  );
}
