import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-14 mb-8  font-poppins  ">
      <Link to="/" className="block text-6xl  text-center">
        Evergreen Medical Center
      </Link>
    </div>
  );
};

export default Header;
