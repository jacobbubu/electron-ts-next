// Packages
import React from 'react';
import { default as Button } from '@material-ui/core/Button';
import { default as Typography } from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';
// Utils
import { resolve } from '../utils';
const styles = ({ spacing }) => createStyles({
    root: {
        textAlign: 'center',
        paddingTop: spacing.unit * 4
    }
});
const About = withStyles(styles)(class extends React.Component {
    render() {
        const { classes } = this.props;
        return (<div className={classes.root}>
          <Typography variant="display1" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subheading" gutterBottom>
            with Nextron
          </Typography>
          <Typography gutterBottom>
            <a href={resolve('home')}>
              Go to the home page
            </a>
          </Typography>
          <Button variant="contained" color="primary">
            Do nothing button
          </Button>
        </div>);
    }
});
export default About;
//# sourceMappingURL=about.jsx.map