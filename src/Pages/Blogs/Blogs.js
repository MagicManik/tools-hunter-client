import React from 'react';
import './Bloogs.css'

const Blogs = () => {
    return (
        <section className='blog-container'>



            <div className='context-api'>
                <h1><span className='gradient-text-2 text-2xl block my-3 font-bold'>How will you improve the performance of a React Application?</span></h1>
                <p>Context Api is a system of sending data. Its can easily sending data from parent component to his all child components. Also we know that props is a system for sending data from a parent component to a child component. But Props can only send data to its Immediate Child component. And this is why props have to go from one child component to another child component by drilling props. If you want to give a lot of child components to the props, it is a matter of time. Context API basically solves this problem.</p>
            </div>

            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'> What are the different ways to manage a state in a React application?</span></h1>
                <p>Semantic tags play a vital role in understanding the layout of a web site. It is as useful for web developers and web browsers as it is for our search engine bots. Before the semantic tag came, search engine bots could not scroll through our web sites well and our developers also had to face many problems to understand the code of any other developer. The job of semantic tags is to make our web site meaningful. The key to semantic tags is that machines and human genes can easily read and understand code.</p>
            </div>
            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'>How does prototypical inheritance work?</span></h1>
                <p>Semantic tags play a vital role in understanding the layout of a web site. It is as useful for web developers and web browsers as it is for our search engine bots. Before the semantic tag came, search engine bots could not scroll through our web sites well and our developers also had to face many problems to understand the code of any other developer. The job of semantic tags is to make our web site meaningful. The key to semantic tags is that machines and human genes can easily read and understand code.</p>
            </div>
            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</span></h1>
                <p>Semantic tags play a vital role in understanding the layout of a web site. It is as useful for web developers and web browsers as it is for our search engine bots. Before the semantic tag came, search engine bots could not scroll through our web sites well and our developers also had to face many problems to understand the code of any other developer. The job of semantic tags is to make our web site meaningful. The key to semantic tags is that machines and human genes can easily read and understand code.</p>
            </div>
            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'>What is a unit test? Why should write unit tests?</span></h1>
                <p>Semantic tags play a vital role in understanding the layout of a web site. It is as useful for web developers and web browsers as it is for our search engine bots. Before the semantic tag came, search engine bots could not scroll through our web sites well and our developers also had to face many problems to understand the code of any other developer. The job of semantic tags is to make our web site meaningful. The key to semantic tags is that machines and human genes can easily read and understand code.</p>
            </div>
        </section>
    );
};

export default Blogs;