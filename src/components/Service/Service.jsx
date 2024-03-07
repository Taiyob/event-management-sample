import { useEffect, useState } from "react";
import Services from "../Services/Services";

const Service = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAllServices(data));
  }, []);
  console.log(allServices);
  return (
    <div>
      <h1 className="text-center text-6xl text-black font-bold">
        Our Services
      </h1>
      <div className="grid grid-cols-3">
        {
            allServices.map(services=><Services key={services.id} services={services}></Services>)
        }
      </div>
    </div>
  );
};

export default Service;
