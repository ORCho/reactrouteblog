import React, {useState,useEffect} from 'react';
import Router, { useRouteMatch } from 'react-router-dom';


const generatePage = postId => {
    // console.log(postId)
    const Component = require(`./component/blog/${postId}`).default
        return <Component />;

    }

export default function Blog () {
    const {
        params:{postId}
    } = useRouteMatch()
    // console.log(postId)

    return (
        generatePage(postId)
    ) 
}


