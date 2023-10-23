import TopicCard from "./components/topiccard";
import usestate from "./assets/usestate.png";
import useeffect from "./assets/useeffect.png";
import usememo from "./assets/usememo.png";
import useref from "./assets/useref.png";

export default function Home() {

    const carddetails = [{
        title: "useState",
        data: "Declares a state variable that you can update directly.",
        link: "/usestate",
        bg: usestate
    },{
        title: "useEffect",
        data: "Performs side effects in function components.",
        link: "/useeffect",
        bg: useeffect
    },{
        title: "useMemo",
        data: "Memoizes expensive functions so that you can avoid calling them on every render.",
        link: "/usememo",
        bg: usememo
    },{
        title: "useRef",
        data: "Stores a mutable value that persists across renders.",
        link: "/useref",
        bg: useref
    }]

    return (
        <>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <TopicCard title={carddetails[0].title} data={carddetails[0].data} link={carddetails[0].link} bg={carddetails[0].bg}/>
                <TopicCard title={carddetails[1].title} data={carddetails[1].data} link={carddetails[1].link} bg={carddetails[1].bg}/>
                <TopicCard title={carddetails[2].title} data={carddetails[2].data} link={carddetails[2].link} bg={carddetails[2].bg}/>
                <TopicCard title={carddetails[3].title} data={carddetails[3].data} link={carddetails[3].link} bg={carddetails[3].bg}/>
            </div>
        </>
    )
}