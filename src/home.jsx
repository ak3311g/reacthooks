import TopicCard from "./components/topiccard";
import usestate from "./assets/usestate.png";
import useeffect from "./assets/useeffect.png";
import usememo from "./assets/usememo.png";
import useref from "./assets/useref.png";
import usecontext from "./assets/usecontext.png";
import usecallback from "./assets/usecallback.png";

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
    },{
        title: "useContext",
        data: "Accepts a context object and returns the current context value for that context.",
        link: "/usecontext",
        bg: usecontext
    },{
        title: "useCallback",
        data: "Returns a memoized callback.",
        link: "/usecallback",
        bg: usecallback
    }]

    return (
        <>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <TopicCard title={carddetails[0].title} data={carddetails[0].data} link={carddetails[0].link} bg={carddetails[0].bg}/>
                <TopicCard title={carddetails[1].title} data={carddetails[1].data} link={carddetails[1].link} bg={carddetails[1].bg}/>
                <TopicCard title={carddetails[2].title} data={carddetails[2].data} link={carddetails[2].link} bg={carddetails[2].bg}/>
                <TopicCard title={carddetails[3].title} data={carddetails[3].data} link={carddetails[3].link} bg={carddetails[3].bg}/>
                <TopicCard title={carddetails[4].title} data={carddetails[4].data} link={carddetails[4].link} bg={carddetails[4].bg}/>
                <TopicCard title={carddetails[5].title} data={carddetails[5].data} link={carddetails[5].link} bg={carddetails[5].bg}/>
            </div>
        </>
    )
}