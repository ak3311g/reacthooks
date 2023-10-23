import UEffectProject from "../projects/useEProject";

export default function Useeffect() {

    return (
        <>
            <div className="text-center">
                <div className="m-4">
                    {/* Definition */}
                    <p className="text-xl md:text-3xl underline my-3 ms-2 font-bold">useEffect</p>
                    useEffect is a hook that lets you perform side effects in function components.
                    It runs after every render but only if the dependencies have changed. By default, it runs after the first render and after every update. You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to <code>useEffect</code>:
                </div>
                <div className="">
                    {/* Declaration */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Declaration</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            useEffect(setup, dependencies?)
                            <br/><br/>
                            useEffect(() =&gt; &#123;<br />
                            &emsp;// Side effect code goes here.<br />
                            &#125;);
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Usage */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Usage</p>
                    <p className="text-left m-4">In the example below, we use <code>useEffect</code> to update the document title when the <code>count</code> variable changes.</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React, &#123; useState, useEffect &#125; from &apos;react;&apos;<br /><br />
                            function Example() &#123;<br />
                            &emsp;const [count, setCount] = useState(0);<br /><br />
                            &emsp;useEffect(() =&gt; &#123;<br />
                            &emsp;&emsp;document.title = `You clicked {`{count}`} times`;<br />
                            &emsp;&#125;);<br /><br />
                            &emsp;return (<br />
                            &emsp;&emsp;&lt;div&gt;<br />
                            &emsp;&emsp;&emsp;&lt;p&gt;You clicked {`{count}`} times&lt;/p&gt;<br />
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
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Project</p>
                    <p className="text-left m-4">Whenever you click on a button a text is shown here changed is shown but if you click the same button again it won&apos;t show because the content didn&apos;t changed</p>
                    <UEffectProject />
                </div>
                <div className="">
                    {/* Exercise */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Exercise</p>
                    <p className="text-left m-4">Try to fetch data from a API and change the data when data is fetched</p>
                    <div className="text-gray-400 m-3 text-[13px]">
                        <p className="text-left">Hint:</p>
                        <p className="text-left"> Use the code above as a starting point.</p>
                        <p className="text-left"> Use the <code>useEffect</code> hook.</p>
                        <p className="text-left"> Use the <code>fetch</code> function.</p>
                        <p className="text-left"> Use the <code>useState</code> hook.</p>
                        <p className="text-left"> Use the <code>setData</code> function.</p>
                        <p className="text-left"> Use the <code>data</code> variable.</p>
                    </div>
                </div>
                <div className="mb-4">
                    {/* Further Reading & Reference */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Further Reading & References</p>
                    <a className="text-blue-500" href="https://react.dev/reference/react/useEffect" target="_blank" rel="noreferrer" >Effect Hook</a>
                </div>
            </div>
        </>
    )
}