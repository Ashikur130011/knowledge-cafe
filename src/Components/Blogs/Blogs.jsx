import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleBookmarks,handleMarkAsRead}) => {
    const[blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3 text-start'>
            <h2>Blogs: {blogs.length}</h2>
           {
            blogs.map(blog => <Blog 
                blog={blog}
                key={blog.id}
                handleBookmarks={handleBookmarks}
                handleMarkAsRead= {handleMarkAsRead}
                ></Blog>)
           }
            
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;