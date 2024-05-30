import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
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
                ></Blog>)
           }
            
        </div>
    );
};

// Blogs.propTypes = {
//     blogs: PropTypes.object.isRequired
// }
export default Blogs;