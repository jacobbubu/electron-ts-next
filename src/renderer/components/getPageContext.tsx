import { SheetsRegistry } from 'jss'
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
})

export interface PageContext {
  theme: any;
  sheetsManager: Map<any, any>;
  sheetsRegistry: SheetsRegistry,
  generateClassName: Function;

}
function createPageContext(): PageContext {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  }
}

interface Window {
  __INIT_MATERIAL_UI__: PageContext
}

declare var window: Window

export default function getPageContext() {
  if (typeof window === 'undefined') {
    return createPageContext()
  }
  if (!window.__INIT_MATERIAL_UI__) {
    window.__INIT_MATERIAL_UI__ = createPageContext()
  }
  return window.__INIT_MATERIAL_UI__
}
