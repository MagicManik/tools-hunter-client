import React from 'react';
import './Bloogs.css'

const Blogs = () => {
    return (
        <section className='blog-container'>



            <div className='context-api'>
                <h1><span className='gradient-text-2 text-2xl block my-3 font-bold'>How will you improve the performance of a React Application?</span></h1>
                <p>The performance of a reactive application can be enhanced in many ways. In order to increase the performance of the React application, first of all I will try not to duplicate the code in my application. Then I will try to handle the wiring of the React application with love. Besides, I will try my best not to have unnecessary code in my application. I will also try to keep the codes of my application in the organized way.</p>
            </div>

            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'> What are the different ways to manage a state in a React application?</span></h1>
                <p>There are many ways to manage state in a React application. The React hooks are used to manage state in React application. Use state lets us keep state variables. useQueries, on the other hand, are another way to load our data and keep it straight. It allows us to easily load data and handle data easily.</p>
            </div>

            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'>What is a unit test? Why should write unit tests?</span></h1>
                <p>Unit testing is a software testing method. It is very important to write. Through this the individual components of the application are tested Developers write unit tests for their code to make sure the code works properly. This helps developers to identify and fix bugs in future applications. This allows developers to easily find and fix application bugs.</p>
            </div>
            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'>How does prototypical inheritance work?</span></h1>
                <p>Prototypal Inheritance is a feature of JavaScript that allows you to add methods and properties to objects. It is a system that allows one object to inherit another's characteristics and methods. A prototype usually acts as a template for additional objects, they extend the underlying object. We know that every object has an internal and a hidden property. These hidden properties help us to take our data and expand our data.</p>
            </div>

            <div className='semantic-tag'>
                <h1><span className='gradient-text-2 text-2xl font-bold block my-4'>Why you do not set the state directly in React?</span></h1>
                <p>The state should not be used directly. Because
                    Our changes may be overwritten if we change it directly. Usually we state does not change immediately when we update the state directly. As a result, we will lose state control over all our elements. So Everybody Experienced developers say that don’t do it.
                </p>
            </div>
        </section>
    );
};

export default Blogs;