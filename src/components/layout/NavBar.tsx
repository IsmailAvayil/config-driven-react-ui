import { NavLink } from "react-router-dom";
import { useConfig } from "../../context/configContext";

export const Navbar = () => {
  const { pages, theme, nav } = useConfig();

  if (!nav?.show) return null;

  return (
    <nav className={`${theme.primaryColor} ${theme.spacing}`}>
      <ul className="flex gap-6">
        {pages.map((page) => (
          <li key={page.path}>
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                `${theme.textColor} ${isActive ? "font-bold underline" : ""}`
              }
            >
              {page.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
