import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="container">
      <h2>404 Page Not Found</h2>
      <p>{location.pathname}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
