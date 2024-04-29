import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className=" p-20 ">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
