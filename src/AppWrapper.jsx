import { ThemeProvider } from '@mui/material/styles';
import { WindowProvider } from './Context';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import App from './App';
import { theme } from './MuiTheme';
import HomePage from "./pages/HomePage";
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Info from './pages/Info';
import PriceList from './pages/PriceList';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import TermsAndConditions from './pages/TermsAndConditions';
import Playground from './Playground';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/portfolio/gallery" element={<Gallery />} />
      <Route path="/portfolio/gallery/:id" element={<Gallery />} />
      <Route path="/informace" element={<Info />}/>
      <Route path="/cenik" element={<PriceList />}/>
      <Route path="/kontakt" element={<Contact />}/>
      <Route path="/terms" element={<TermsAndConditions />}/>
      <Route path="*" element={<NotFound />} />
      {/* Temporary link */}
      <Route path="/playground" element={<Playground />} />
      <Route path="/app" element={<App />} />
    </Route>
  )
);
const AppWrapper = () => {
    return (
      <ThemeProvider theme={theme}>
        <WindowProvider>
          <RouterProvider router={router} />
        </WindowProvider>
      </ThemeProvider>
    );
  };
  
  export default AppWrapper;