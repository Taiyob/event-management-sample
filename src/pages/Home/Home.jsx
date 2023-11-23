import Banner from "../../components/Banner/Banner";
import Donate from "../../components/Donate/Donate";
import Hospitality from "../../components/Hospitality/Hospitality";
import LastEvent from "../../components/LastEvent/LastEvent";
import PosterImage from "../../components/PosterImage/PosterImage";
import Service from "../../components/Service/Service";
import Testimonial from "../../components/Testimonial/Testimonial";
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <PosterImage></PosterImage>
            <UpcomingEvent></UpcomingEvent>
            <Hospitality></Hospitality>
            <LastEvent></LastEvent>
            <Donate></Donate>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;