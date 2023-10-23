import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function TopicCard(props) {
    return(
        <>
            <div className="relative h-[200px] flex bg-blue-500 m-2 rounded-lg overflow-hidden upper z-10 shadow-md shadow-gray-500">
                <div className="bg-green-500 w-3/4 h-full inner z-10 flex justify-center items-center text-3xl font-semibold">
                    {props.title}
                </div>
                <div className="bg-red-500 w-full h-full absolute -z-10 inner2">
                    <img src={props.bg} alt="" />
                </div>
                <div className="absolute p-2 text-white font-bold -z-20 innerdata">
                    <p className="text-2xl cursor-default">{props.data}</p>
                    <Link to={props.link} className="text-xl cursor-pointer text-red-300">View More</Link>
                </div>
            </div>
        </>
    )
}

TopicCard.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
}