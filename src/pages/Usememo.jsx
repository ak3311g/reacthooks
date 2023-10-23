import UMemoProject from "../projects/useMProject";

export default function Usememo() {

    return (
        <>
            <div className="text-center mt-10">
                <div className="m-4">
                    {/* Definition */}
                    <p className="text-xl md:text-3xl underline my-3 ms-2 font-bold">useMemo</p>
                    useMemo is a hook that memoizes expensive functions so that you can avoid calling them on every render.
                    It is like a cache for functions.
                </div>
                <div className="">
                    {/* Declaration */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Declaration</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Usage */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Usage</p>
                    <p className="text-left m-4">In the example below, we declare a state variable called <code>count</code>, and set it to <code>0</code>. To change this variable, we use <code>setCount</code>.</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React, &#123; useState, useMemo &#125; from &apos;react;&apos;<br /><br />
                            function Example() &#123;<br />
                            &emsp;const [count, setCount] = useState(0);<br />
                            &emsp;const [count2, setCount2] = useState(0);<br /><br />
                            &emsp;const isEven = useMemo(() =&gt; &#123;<br />
                            &emsp;&emsp;let i = 0;<br />
                            &emsp;&emsp;while (i &lt; 2000000000) i++;<br />
                            &emsp;&emsp;return count % 2 === 0;<br />
                            &emsp;&#125;, [count]);<br /><br />
                            &emsp;return (<br />
                            &emsp;&emsp;&lt;div&gt;<br />
                            &emsp;&emsp;&emsp;&lt;p&gt;You clicked {`{count}`} times&lt;/p&gt;<br />
                            &emsp;&emsp;&emsp;&lt;p&gt;{`{isEven ? 'Even' : 'Odd'}`}&lt;/p&gt;<br />
                            &emsp;&emsp;&emsp;&lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;<br />
                            &emsp;&emsp;&emsp;&emsp;Click me<br />
                            &emsp;&emsp;&emsp;&lt;/button&gt;<br />
                            &emsp;&emsp;&emsp;&lt;button onClick=&#123;() =&gt; setCount2(count2 + 1)&#125;&gt;<br />
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
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Example</p>
                    <UMemoProject />
                </div>
                <div className="">
                    {/* Exercise */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Exercise</p>
                    <p className="text-left m-4">Build a basic calculator application where you can perform addition, subtraction, multiplication, and division. Use useMemo to calculate the result of each operation.</p>
                </div>
                <div className="mb-4">
                    {/* Further Reading & Reference */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Further Reading & References</p>
                    <a className="text-blue-500" href="https://react.dev/reference/react/useMemo" target="_blank" rel="noreferrer" >Memo Hooks</a>
                </div>
            </div>
        </>
    )
}