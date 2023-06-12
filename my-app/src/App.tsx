import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appLinks } from "./helpers/routes";
import Theme from "./Theme";



const Home = lazy(() => import("./containers/Home"));
const Details = lazy(() => import("./containers/Details"));

function App() {
  return (
    <Theme>
      <BrowserRouter>
          <Suspense fallback={<div>Loading</div> }>
        <Routes>
            <Route index path={appLinks.home.link} element={<Home />} />
            <Route path={appLinks.details.link} element={<Details />} />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
