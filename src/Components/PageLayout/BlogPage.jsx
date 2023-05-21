import React from 'react';
import PageTitle from '../PageTitle';

const BlogPage = () => {
    return (
        <div className='my-5'>
            <PageTitle>Blog</PageTitle>
            <div className='p-5 shadow-md mb-3'>
                <h1 className='font-header text-2xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='p-5 opacity-90'>We are use JWT for more secoure our server data. Jwt verfity user by access token . If user token match with jwt token then jwt verifed user without jwt deined user.  Ever access token has a time limit. After this time token validation will be expire. For new acces token , user requested JWT for new refress token.  When access token will expire then user get request for refress token . This token website store in HTTP or localstorage, Store access token in HTTP is more then secoure Localstorage.</p>
            </div>
            <div className='p-5 shadow-md mb-3'>
                <h1 className='font-header text-2xl'>Compare SQL and NoSQL databases?</h1>
                <p className='p-5 opacity-90'>There are two system for store data in database. one is SQL database another one is NoSQL database system. In SQL database data store in a table system. NoSQL data store database in a json doucment/objcet way. In SQL database we never increase col or row everytime when we want but in NoSQL database we can increase and decrease database col or row everytime.</p>
            </div> 
            <div className='p-5 shadow-md mb-3'>
                <h1 className='font-header text-2xl'>What is express js? What is Nest JS?</h1>
                <p className='p-5 opacity-90'>Nodejs is a runtime in server side. express js is a framework in nodejs. if we use nodejs then it very deficult to manage server time and needs to write more code lot's of code. After express js it's become so easy to use and implement . Express js is a fast process web framework build from node js.
                Express js is unopinionated and minimalist but nest js is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. Nest js provide code stracture in our server code.</p>
            </div>
            <div className='p-5 shadow-md mb-3'>
                <h1 className='font-header text-2xl'>What is MongoDB aggregate and how does it work?</h1>
                <p className='p-5 opacity-90'>MongoDb aggregation is a framework. Mongodb aggregation framework fetures that allow to process and analyze data within mongodb. when we want to get complex output then Mongodb aggregegation is work properly. Mongodb aggregation is woking on a collection of document. this allow to cain maltiple stage togather to create a series of data transformation.
                some Aggregation key is Stages, Pipeline, Operators etc.</p>
            </div>
            
        </div>
    );
};

export default BlogPage;