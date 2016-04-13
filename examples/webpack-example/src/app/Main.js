/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/lib/Card';
import {grey800, deepOrange500} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const styles = {
  container: {
    width: 1920,
    height: 1080,
  },
  card1: {
    marginTop: 64,
    marginLeft: 384,
  },
  card1Size: {
    height: 444,
    width: 1152,
  },
  card2: {
    marginTop:64,
    marginBottom:64,
    marginLeft: 384,
  },
  card2Size: {
    height: 444,
    width: 1152,
  },
  cardTitle: {
    textAlign: 'left', 
    marginLeft: 470, 
    marginTop: 50, 
    fontSize: 52,
  },
  cardSubtitle: {
    textAlign: 'left', 
    marginLeft: 470, 
    fontSize: 26, 
    marginTop: 20, 
    lineHeight: 1.3,
  },
  cardText: {
    textAlign: 'left', 
    marginLeft: 470, 
    fontSize: 32,
  },
  image: {
    float: 'left',
    width: 444,
    height: 444,
  },
  twitter: {

  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {

    const card1 = (
        <div style={styles.card1}>
            <Card style={styles.card1Size} zDepth={3}>
                <img style={styles.image} src="http://cdn.call-em-all.com/meetup/geoffrey.jpeg" />
                <CardTitle 
                    title="Geoffrey Abdallah"  
                    subtitle={<span >Lead Software Developer <br /> TourConnect </span>} 
                    titleStyle={styles.cardTitle}
                    subtitleStyle={styles.cardSubtitle}
                />
                <CardText style={styles.cardText}>
                 <br /> <br /> <br /><br /><br /><br /><br />State Management in React  
                </CardText>
            </Card>
        </div>
        );

    const card2 = (
        <div style={styles.card2}>
           <Card style={styles.card1Size} zDepth={3}>
                <img style={styles.image} src="http://cdn.call-em-all.com/meetup/chris.jpg" />
                <CardTitle 
                    title="Chris LeBlanc  "  
                    subtitle={<span >Solutions Architect <br />Buzznog/Clever Lever <br /><br /> <SvgIcon style={styles.twitter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                   <path stroke="white" fill="#55ACEE" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,
                      4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,
                      5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,
                      5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,
                      10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,
                      14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,
                      18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,
                      21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/></SvgIcon> &nbsp;<i>@leblaaanc</i><br /></span>} 
                    titleStyle={styles.cardTitle} 
                    subtitleStyle={styles.cardSubtitle}
                />
                
                <CardText style={styles.cardText}>
                 <br /> <br /> <br /><br />Introduction to React Native
                </CardText>
            </Card>
        </div>
        );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
           {card2}
           {card1}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
