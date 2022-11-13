import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from './layout/global/TopBar';
import {Routes,Route} from 'react-router-dom';
import DashBoard from './layout/dashboard';
import SideBar from './layout/global/SideBar'
import { ProSidebarProvider } from "react-pro-sidebar";
import {route} from './route'


function App() {
  const [theme, colorMode] = useMode();
  const routes = route()
  return (
    <ProSidebarProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
        <CssBaseline />
        <div className="app">
          <SideBar/>
          <main className='content'>
            <TopBar/>
            <Routes>
                {
                  routes.map(e => {
                    return (
                      <Route key={e.key} path={e.link} element={e.component}/>
                    )
                  })
                }
              <Route path="*/" element={<DashBoard />}/>
            </Routes>
          </main>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
    </ProSidebarProvider>
  );
}

export default App;
