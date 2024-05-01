import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { _id } = useParams();

  const loader = useLoaderData();
  const location = useLocation();

  console.log("Location", location.pathname);
  // console.log(loader, _id);

  const serviceDetails = loader.find((loaderData) => loaderData.id === _id);
  console.log(serviceDetails);
  const { name, image, description } = serviceDetails;
  return (
    <div>
      <div className="card md:w-1/2 sm:w-full  mb-11 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title pb-6">{name}</h2>
          <p>{description}</p>
        </div>
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
      <Link className="btn btn-primary mx-auto w-1/2 block py-5 mb-14" to="/">
        Go Back To Home
      </Link>
    </div>
  );
};

export default ServiceDetails;
