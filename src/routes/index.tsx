  import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
  import ExplorePage from "../pages/Explore";
  import HomePage from "../pages/Home";
  import ProfilePage from "../pages/Profile";
  import ReelsPage from "../pages/Reels";
  import RootPage from "../pages/root";
  import ProtectedRoute from "../components/Protected_Route";

  export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootPage />}>
          <Route element={<ProtectedRoute><HomePage /></ProtectedRoute>} index />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="reels" element={<ReelsPage />} />
        </Route>
      </>
    )
  );
