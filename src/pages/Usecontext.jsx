import StoreProvider from "../projects/useCProject/storeprovider";

export default function Usecontext() {

    return (
        <>
            <div className="text-center mt-10">
                <div className="m-4">
                    {/* Definition */}
                    <p className="text-xl sm:text-3xl underline my-3 ms-2 font-bold">useContext</p>
                    <p className="text-[10px] sm:text-lg my-3 ms-2 font-bold">
                        Accepts a context object and returns the current context value for that context.
                        <br />
                        <br />
                        Imagine you have a big bag (like a school bag) where you keep your toys and snacks.
                        Now, this bag is like a special bag called &quot;context&quot; in React.
                        <br />
                        <br />
                        It can hold some special information or data that you want to share with many parts
                        of your React app, like different rooms in your house.
                        <br />
                        <br />
                        So, what&apos;s inside this bag (context)? It&apos;s like a secret notebook that holds some
                        important information. Let&apos;s call this notebook &quot;state.&quot; The notebook has some notes, like your name, age, and favorite color. These are your secrets!
                        <br />
                        <br />
                        Now, you have different rooms in your house, which are like the parts of your React app, such as your bedroom, kitchen, and living room. In each room, you have a friend who wants to know your secrets (the data in your notebook). Instead of showing your notebook to each friend, you can use a magic spell called &quot;useContext.&quot;
                    </p>
                </div>
                <div className="">
                    {/* Declaration */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Declaration</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            const value = useContext(MyContext);
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Usage */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Usage</p>
                    <p className="text-left m-4">In the example below, we use <code>useContext</code> to get the value of the context.</p>
                    <p className="text-[10px] md:text-lg text-left m-4">First, create a context:</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React, &#123; createContext &#125; from &apos;react&apos;;
                            <br /><br />
                            const MyContext = createContext();
                            <br /><br />
                            export default MyContext;
                        </code>
                    </pre>

                    <p className="text-[10px] md:text-lg text-left m-4">Then, create a provider:</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React, &#123; useState &#125; from &apos;react&apos;;
                            <br /><br />
                            import MyContext from &apos;./MyContext&apos;;
                            <br /><br />
                            function MyProvider(&#123; children &#125;) &#123;
                            <br />
                            &emsp;const [count, setCount] = useState(0);
                            <br /><br />
                            &emsp;return (
                            <br />
                            &emsp;&emsp;&lt;MyContext.Provider value=&#123;&#123; count, setCount &#125;&#125;&gt;
                            <br />
                            &emsp;&emsp;&emsp;&#123; children &#125;
                            <br />
                            &emsp;&emsp;&lt;/MyContext.Provider&gt;
                            <br />
                            &emsp;);
                            <br />
                            &#125;
                            <br /><br />
                            export default MyProvider;
                        </code>
                    </pre>

                    <p className="text-[10px] md:text-lg text-left m-4">Finally, use the context:</p>
                    <pre className="text-[10px] md:text-lg bg-gray-500 rounded-md p-2 m-4 text-left">
                        <code>
                            import React from &apos;react&apos;;
                            <br /><br />
                            import MyContext from &apos;./MyContext&apos;;
                            <br /><br />
                            function MyComponent() &#123;
                            <br />
                            &emsp;const &#123; count, setCount &#125; = useContext(MyContext);
                            <br /><br />
                            &emsp;return (
                            <br />
                            &emsp;&emsp;&lt;div&gt;
                            <br />
                            &emsp;&emsp;&emsp;&lt;p&gt;You clicked &#123;count&#125; times&lt;/p&gt;
                            <br />
                            &emsp;&emsp;&emsp;&lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;
                            <br />
                            &emsp;&emsp;&emsp;&emsp;Click me
                            <br />
                            &emsp;&emsp;&emsp;&lt;/button&gt;
                            <br />
                            &emsp;&emsp;&lt;/div&gt;
                            <br />
                            &emsp;);
                            <br />
                            &#125;
                            <br /><br />
                            export default MyComponent;
                        </code>
                    </pre>
                </div>
                <div className="">
                    {/* Project Example */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Project</p>
                    <StoreProvider />
                </div>
                <div className="">
                    {/* Exercise */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Exercise</p>
                    <p className="text-left m-4">Try to create a basic store with cart icon</p>
                </div>
                <div className="mb-4">
                    {/* Further Reading & Reference */}
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">Further Reading & Reference</p>
                    <p className="text-left m-4">React Docs: <a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank" rel="noreferrer">useContext</a></p>
                </div>
            </div>
        </>
    )
}