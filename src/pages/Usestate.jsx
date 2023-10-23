import UStateProject from "../projects/useSProject";

export default function Usestate() {

    return (
        <>
            <div className="text-center">
                <div className="m-4">
                    {/* Definition */}
                    <p className="text-xl md:text-3xl underline my-3 ms-2 font-bold">useState</p>
                    <a className="text-blue-500" href="https://react.dev/learn/state-a-components-memory" target="_blank" rel="noreferrer" >State</a> lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.
                </div>
                <div className="">
                    {/* Declaration */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Declaration</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            const [state, setState] = useState(initialState);
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Usage */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Usage</p>
                    <p className="text-left m-4">In the example below, we declare a state variable called <code>count</code>, and set it to <code>0</code>. To change this variable, we use <code>setCount</code>.</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React, &#123; useState &#125; from &apos;react;&apos;<br /><br />
                            function Example() &#123;<br />
                            &emsp;const [count, setCount] = useState(0);<br /><br />
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
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Project</p>
                    <p className="text-left m-4">Create a counter that increments when the user clicks on a button.</p>
                    <UStateProject />
                </div>
                <div className="">
                    {/* Exercise */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Exercise</p>
                    <p className="text-left m-4">Create a button that increments a counter when clicked.</p>
                    <div className="text-gray-400 m-3 text-[13px]">
                        <p className="text-left">Hint:</p>
                        <p className="text-left"> Use the code above as a starting point.</p>
                        <p className="text-left"> Use the <code>useState</code> hook.</p>
                        <p className="text-left"> Use the <code>onClick</code> event handler.</p>
                        <p className="text-left"> Use the <code>setCount</code> function.</p>
                        <p className="text-left"> Use the <code>count</code> variable.</p>
                    </div>
                </div>
                <div className="mb-4">
                    {/* Further Reading */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Further Reading & References</p>            
                    <a className="text-blue-500" href="https://react.dev/reference/react/useState" target="_blank" rel="noreferrer" >State Hook</a>
                </div>
            </div>
        </>
    )
}