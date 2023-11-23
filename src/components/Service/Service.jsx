import {
  FaHeart,
  FaLaptopMedical,
  FaFlask,
  FaUserMd,
  FaAmbulance,
} from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import "./service.css";
import { Link } from "react-router-dom";

const Service = () => {
  const colors = [
    "bg-red-700",
    "bg-blue-700",
    "bg-green-700",
    "bg-yellow-700",
    "bg-purple-700",
    "bg-pink-700",
  ];
  const serviceData = [
    {
      id: 1,
      icon: <GiHealthNormal />,
      description: "Quality healthcare services for everyone.",
      title: "Healthcare",
      detail_Description: 'Comprehensive healthcare services addressing overall well-being. Offers preventive care, primary care, and access to various medical professionals. Community members can attend health education workshops, wellness screenings, and engage in lifestyle counseling sessions to promote healthier living. Hospitals provide free health check-ups during the event, and doctors offer consultations, answer health-related queries, and refer individuals to specialized services if needed.',
      img: 'https://i.ibb.co/ykvKhgW/img1.jpg',
    },
    {
      id: 2,
      icon: <FaHeart />,
      description: "Personalized care to keep your heart healthy.",
      title: "Cardiology",
      detail_Description: 'Specialized care focused on the heart and circulatory system. Provides diagnosis and treatment for cardiovascular conditions. Community members can participate in heart health awareness campaigns, attend CPR training, and learn about lifestyle changes for heart health. Cardiologists conduct free heart screenings, provide consultations, and educate attendees about heart-healthy practices.',
      img: 'https://i.ibb.co/RBrjnXN/img2.jpg',
    },
    {
      id: 3,
      icon: <FaLaptopMedical />,
      description: "Advanced medical technology at your service.",
      title: "Telemedicine",
      detail_Description: 'Advanced medical technology for remote healthcare services, enabling virtual consultations and information exchange. Community members can learn about the benefits of telemedicine, attend virtual health consultations, and explore how technology can enhance healthcare accessibility. Hospitals showcase telemedicine technology, allowing doctors to provide remote consultations and demonstrate the effectiveness of virtual healthcare.',
      img: 'https://i.ibb.co/GcwrGCb/img3.jpg',
    },
    {
      id: 4,
      icon: <FaFlask />,
      description: "Innovative solutions for your health challenges.",
      title: "Research",
      detail_Description: 'Innovations in medical research exploring new treatments, technologies, and methodologies. Community members can attend research presentations, learn about clinical trials, and contribute to health surveys to support ongoing research. Hospitals present ongoing research projects, and doctors engage with the community, explaining the impact of research on improving patient outcomes.',
      img: 'https://i.ibb.co/zJjYdTb/img4.jpg',
    },
    {
      id: 5,
      icon: <FaUserMd />,
      description: "Expert dental care for a brighter smile.",
      title: "Dentistry",
      detail_Description: 'Expert dental care services maintaining oral health and promoting a brighter smile. Community members can receive free dental check-ups, attend oral hygiene workshops, and access information on cosmetic dentistry options. Dentists offer free dental consultations, perform basic dental procedures, and provide information on oral health practices.',
      img: 'https://i.ibb.co/yPXNtP2/img5.jpg',
    },
    {
      id: 6,
      icon: <FaAmbulance />,
      description: "Emergency medical services 24/7.",
      title: "Emergency Care",
      detail_Description: 'Immediate and critical medical services addressing life-threatening conditions and emergencies. Community members can participate in emergency response training, learn basic first aid, and understand how to access emergency services. Emergency care teams demonstrate life-saving techniques, educate on recognizing emergencies, and provide information on accessing emergency medical services.',
      img: 'https://i.ibb.co/HNGSqXd/img6.jpg',
    },
  ];
  return (
    <div className="mt-40">
      <h1 className="text-6xl font-bold text-orange-500 text-center mb-10">
        Our Service
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5">
        {serviceData.map((service, index) => (
          <Link key={service.id} to={`/service/${service.id}`}>
            <div
              className={`service-box h-[400px] w-[400px] ${colors[index]} rounded-2xl hover:bounce pt-5`}
            >
              <div className="bg-orange-500 rounded-full text-4xl text-white h-40 w-40 flex items-center justify-center p-8 mb-5 relative ml-32 mt-10">
                {service.icon}
              </div>
              <h2 className="text-sm text-white p-5 text-center">
                {service.description}
              </h2>
              <p className="text-white text-center text-xl font-bold mt-5">
                {service.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Service;
