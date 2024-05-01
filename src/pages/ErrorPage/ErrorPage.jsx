import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-amber-300 h-screen mx-auto">
      <h2 className="text-9xl font-bold font-poppins text-center pt-20">
        {" "}
        Oops!!!
      </h2>
      <p className="text-3xl font-bold text-center pt-10">404 page-not-found</p>
      <p className="text-3xl font-normal font-poppins text-center pt-10">
        The page you are looking for might have been removed had its name <br />
        changed or is temporarily unavailable
      </p>

      <Link
        to="/"
        className="text-3xl font-bold font-poppins block mx-auto pt-20 text-center"
      >
        <button className="btn btn-success">Go To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
