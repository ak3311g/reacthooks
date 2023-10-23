import URefProject from "../projects/useRProject";

export default function Useref(){
    return(
        <>
            <div className="text-center mt-10">
                <div className="m-4">
                    {/* Definition */}
                    <h1 className="text-4xl">useRef</h1>
                    <p className="text-xl">Stores a mutable value that persists across renders. useRef is like having a memory where you can store something, but it doesn&apos;t change what you see on the screen (in your component). It&apos;s handy for storing data or values without triggering a re-render of your component.</p>
                </div>
                <div className="">
                    {/* Declaration */}
                    <p className="text-3xl text-left underline my-3 ms-2 font-bold">Declaration</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            const refContainer = useRef(initialValue);
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Usage */}
                    <p className="text-3xl text-left underline my-3 ms-2 font-bold">Usage</p>
                    <p className="text-left m-4">In the example below, we use <code>useRef</code> to store the previous value of the <code>count</code> variable.</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React, &#123; useState, useEffect, useRef &#125; from &apos;react;&apos;<br /><br />
                            function Example() &#123;<br />
                            &emsp;const [count, setCount] = useState(0);<br />
                            &emsp;const prevCountRef = useRef();<br /><br />
                            &emsp;useEffect(() =&gt; &#123;<br />
                            &emsp;&emsp;prevCountRef.current = count;<br />
                            &emsp;&#125;);<br /><br />
                            &emsp;const prevCount = prevCountRef.current;<br /><br />
                            &emsp;return (<br />
                            &emsp;&emsp;&lt;div&gt;<br />
                            &emsp;&emsp;&emsp;&lt;p&gt;Now: {`{count}`} , before: {`{prevCount}`}&lt;/p&gt;<br />
                            &emsp;&emsp;&emsp;&lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;<br />
                            &emsp;&emsp;&emsp;&emsp;Click me<br />
                            &emsp;&emsp;&emsp;&lt;/button&gt;<br />
                            &emsp;&emsp;&lt;/div&gt;<br />
                            &emsp;);<br />
                            &#125;
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Project Example */}
                    <URefProject />
                </div>
                <div className="">
                    {/* Exercise */}
                    <p className="text-3xl text-left underline my-3 ms-2 font-bold">Exercise</p>
                    <p className="text-left m-4">No Exercise its almost same as useeffect but it doesnt render anything but you can check out the what is this hook mostly used for through researching on many platfoms :)</p>
                </div>
                <div className="mb-4">
                    {/* Further Reading & Reference */}
                    <p className="text-3xl text-left underline my-3 ms-2 font-bold">Further Reading & Reference</p>
                    <a className="text-blue-500" href="https://react.dev/reference/react/useRef" target="_blank" rel="noreferrer" >React Docs</a>
                </div>
            </div>
        </>
    )
}