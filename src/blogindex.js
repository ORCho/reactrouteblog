import React, {useState,useEffect} from 'react';
import Router, { useRouteMatch } from 'react-router-dom';
// import BlogPost from './component/post/post'


const generatePage = postId => {
    console.log(postId)

    // return (<div>Happy!</div>)
    // try {
        const Component = require(`./component/blog/${postId}`).default
        return <Component />;
    // } catch (err) {
    //     console.warn(err)
    //     return <React.Fragment>404</React.Fragment>
    // }
    }

export default function Blog () {

    // const [post, setPost] = useState({});
    // useEffect(() => {
    //     const postid = props.match.params.postId;
    //     const post=BlogPost.find(a => a.idurl == postid);
    //     setPost(post);
    //  });
    const {
        params:{postId}
    } = useRouteMatch()
    console.log(postId)

    return (
        generatePage(postId)
        //
        // <div>
        //     <h3>{post.blogTitle}</h3>
        //     <p>{post.blogtext}</p>
        //     <img style={{ "height" : "100px"}} src={post.imageURL} alt="picture"></img>
         
        // </div>
    ) 
}


