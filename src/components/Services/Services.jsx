import PropTypes from "prop-types";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Services = ({ services }) => {
  const {user} = useContext(AuthContext);
  console.log(services);
  const { id, icon, description, title, img } = services || {};
  const navigate = useNavigate();
  const handleDetailsInfo = ()=> {
    if(user){
      navigate(`/service/${id}`);
    }else{
      navigate('/');
    }
  }
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center mt-10 hover:bounce">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-black flex-shrink-0">
                <img src={img} alt="" className="h-full w-full rounded-full" />
                </div>
                <h2 className="text-black dark:text-white text-lg font-medium">
                  {title}
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-black dark:text-gray-300">
                  {description}
                </p>
                {/* to={`/service/${id}`} */}
                <button
                  onClick={handleDetailsInfo} 
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Show Details
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.object,
};

export default Services;
