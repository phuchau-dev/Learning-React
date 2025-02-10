import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

} from "react-router-dom";
import ExplorePage from "../pages/Explore";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import ReelsPage from "../pages/Reels";
import RootPage from "../pages/root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
       <Route element={<HomePage/>} index path=""/>
       <Route element={<ExplorePage/>} index path="explore"/>
       <Route element={<ProfilePage/>} index path="profile"/>
       <Route element={<ReelsPage/>} index path="reels"/>
    </Route>
  )
);

