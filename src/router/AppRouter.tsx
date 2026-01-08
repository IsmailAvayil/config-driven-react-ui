import { Routes, Route } from "react-router-dom";
import PageRenderer from "../components/layout/PageRenderer";
import { useConfig } from "../context/configContext";

export const AppRouter = () => {
  const { pages } = useConfig();

  return (
    <Routes>
      {pages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<PageRenderer sections={page.sections} />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
