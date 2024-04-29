import { useEffect, useState } from "react";
import Service from "../../Service/Service";
import { Link } from "react-router-dom";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())

      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const homeServices = services.slice(0, 3);
  return (
    <div className="my-28">
      <h2 className="text-3xl font-lora font-bold text-center">
        Our Services {services?.length}
      </h2>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-20">
        {homeServices.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
      <Link to="/services">
        <button className="btn  btn-neutral px-28 mt-32 mx-auto block font-lora">
          View More
        </button>
      </Link>
    </div>
  );
};

export default OurServices;
