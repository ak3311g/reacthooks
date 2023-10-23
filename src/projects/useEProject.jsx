import { useState, useEffect } from 'react'

export default function UEffectProject() {

    const [type, setType] = useState('')
    const [data, showData] = useState('');

    useEffect(() => {
        showData('Changed');
        setTimeout(() => {
            showData('');
        }, 2000)
    }, [type])

    return (
        <>
            <div className='w-full h-[30vh]'>
                <div className="">
                    <button className="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setType('post')}>Post</button>
                    <button className="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setType('comments')}>Comments</button>
                    <button className="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setType('albums')}>Albums</button>
                </div>
                <div className=''>
                    <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">{type}</p>
                    {data ? <p className="text-xl md:text-3xl text-left underline my-3 ms-2 font-bold">{data}</p> : null}
                </div>
            </div>
        </>
    )
}