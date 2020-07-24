import React, { useState, useEffect}from 'react';
import blogPost from './post'
import { NavLink } from 'react-router-dom';

function Post(props) {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const posts = blogPost;
        setPosts(posts)
    }, posts);



    return (
        <div>
            {posts.map(function (postdetails) {
                console.log(postdetails.idurl);
               
            return (
                <div>
                <NavLink to={'./blog/'+ postdetails.idurl }>
                {/* <h3>{postdetails.blogtext}</h3> */}
                    <p>{postdetails.blogTitle}</p>
                    </NavLink>
                </div>
                
            
            )
            })
        } 
        </div>
            ) 
}
export default Post;
