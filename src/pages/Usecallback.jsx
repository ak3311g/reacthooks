import UCallbackProject from "../projects/useCBProject";

export default function Usecallback() {

    return (
        <>
            <div className="text-center mt-10">
                <div className="m-4">
                    {/* Definition */}
                    <p className="text-xl md:text-3xl underline my-3 ms-2 font-bold">useCallback</p>
                    useCallback is a React Hook that lets you cache a function definition between re-renders.
                </div>
                <div className="">
                    {/* Declaration */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Declaration</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            useCallback(fn, dependencies?)
                            <br/><br/>
                            const memoizedCallback = useCallback(() =&gt; &#123;<br />
                            &emsp;// Side effect code goes here.<br />
                            &#125;, [dependencies]);
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Usage */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Usage</p>
                    <p className="text-left m-4">In the example below, we use <code>useCallback</code> to cache the <code>increment</code> function between re-renders.</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React, &#123; useState, useCallback &#125; from &apos;react;&apos;<br /><br />
                            function Example() &#123;<br />
                            &emsp;const [count, setCount] = useState(0);<br /><br />
                            &emsp;const increment = useCallback(() =&gt; &#123;<br />
                            &emsp;&emsp;setCount(count + 1);<br />
                            &emsp;&#125;, [count]);<br /><br />
                            &emsp;return (<br />
                            &emsp;&emsp;&lt;div&gt;<br />
                            &emsp;&emsp;&emsp;&lt;p&gt;You clicked {`{count}`} times&lt;/p&gt;<br />
                            &emsp;&emsp;&emsp;&lt;button onClick=&#123;increment&#125;&gt;<br />
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
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Project Example</p>
                    <UCallbackProject />
                </div>
                <div className="">
                    {/* Exercise */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Exercise</p>
                    <p className="text-left m-4">Create a new project and implement the following:</p>
                    <ul className="text-left m-4 list-disc">
                        <li>Declare a function that takes in a number and returns its square root.</li>
                        <li>Declare a state variable that stores the square root of the number.</li>
                        <li>Use <code>useCallback</code> to cache the function definition.</li>
                        <li>Render the square root of the number.</li>
                    </ul>
                </div>
                <div className="mb-4">
                    {/* Further Reading & Reference */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Further Reading & Reference</p>
                    <p className="text-left m-4">You can read more about <code>useCallback</code> here:</p>
                    <a href="https://react.dev/reference/react/useCallback#usecallback" target="_blank" rel="noreferrer" className="text-blue-400">useCallback Hook</a>
                </div>
            </div>
        </>
    )
}