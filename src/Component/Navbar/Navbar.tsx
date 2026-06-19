import { NavLink } from "react-router-dom";
import "./navbarlink.style.css";
const navlinks = [
  "useCounter",
  "useClipboard",
  "usedarkMode",
  "useOnlineStatus",
  "useFetch",
  "useDebounce",
  "useThrottle",
  "usePrevious",
  "usePagination",
  "useForm",
  "useWindowSize",
  "useIdel",
  "useKeyPressed",
  "useOnClickOutside",
];

export default function Navbar() {
  return (
    <div>
      <h3>Navbar</h3>
      <section className="navlinks">
        {navlinks.map((link) => (
          <NavLink
            key={`/${link}`}
            to={`/${link}`}
            className={({ isActive }) =>
              isActive ? "navlink navlink-active" : "navlink"
            }
          >
            <span className="capitalize">{link}</span>
          </NavLink>
        ))}
      </section>
    </div>
  );
}
