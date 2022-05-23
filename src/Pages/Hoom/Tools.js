import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from './Tool';
import './Tools.css'

const Tools = () => {
    const [tools, setTools] = useTools();

    return (

        <section className='tools-section bg-accent'>

            <div>
                <h1 className='text-center text-4xl font-bold my-10'>Hunt Your Best Tools</h1>
            </div>
            <div className='tool-containers'>
                {
                    tools.map(tool =>
                        <Tool key={tool._id} tool={tool} >
                        </Tool>)
                }
            </div>

        </section>
    );
};

export default Tools;