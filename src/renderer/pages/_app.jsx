// Packages
import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { default as CssBaseline } from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
// Utils
import getPageContext from '../components/getPageContext';
class MyApp extends App {
    constructor(props) {
        super(props);
        this.pageContext = getPageContext();
    }
    render() {
        const { Component, pageProps } = this.props;
        return (<Container>
        <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
          <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
            <CssBaseline />
            <Component pageContext={this.pageContext} {...pageProps}/>
          </MuiThemeProvider>
        </JssProvider>
      </Container>);
    }
}
export default MyApp;
//# sourceMappingURL=_app.jsx.map