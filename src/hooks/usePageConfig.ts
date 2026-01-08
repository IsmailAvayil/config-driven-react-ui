import { useLocation } from "react-router-dom";
import { useConfig } from "../context/configContext";

export const usePageConfig = () => {
  const { pages } = useConfig();
  const location = useLocation();

  return pages.find((p) => p.path === location.pathname);
};
