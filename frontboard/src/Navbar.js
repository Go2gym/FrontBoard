import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const path = window.location.path;
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustonLink to="/pricing">Pricing</CustonLink>
        <CustonLink to="/about">About</CustonLink>
      </ul>
    </nav>
  );
}

function CustonLink({ children, to, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
