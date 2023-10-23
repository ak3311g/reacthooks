import { Link, useLocation } from "react-router-dom"

export default function Header() {

    const location = useLocation().pathname

    return (
        <>
            <div className="sticky top-0 z-50 bg-gray-700 p-2 text-center flex justify-center items-center flex-col">
                {
                    location==='/' ? "":<Link to="/" className="absolute top-0 left-0 text-3xl md:text-5xl ms-3">&#8592;</Link>
                }
                <Link to="/" className="text-4xl font-bold">React Hooks</Link>
                <p className="w-3/4">React Hooks is a new feature introduced in React 16.8. It allows you to use state and other React features without writing a class.</p>
            </div>
        </>
    )
}