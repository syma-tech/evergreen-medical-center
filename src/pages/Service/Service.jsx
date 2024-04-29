import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, image, name, description } = service;

  // console.log(id, image, name, description);
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-poppins">{name}</h2>
        <p className="font-poppins">{description.slice(0, 120)}...</p>
        <div className="card-actions justify-end ">
          <Link to={`/services/${id}`} className="btn btn-primary font-lora">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
