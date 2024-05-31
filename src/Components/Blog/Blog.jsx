import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    const {title,cover,author_img,author,reading_time,hashtags, id} = blog;
    return (
        <div className= 'pt-10'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center '>
                <img className='w-10' src={author_img} alt="" />
                <div>
                <h4 >{author}</h4>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=>handleBookmarks(blog)}
                    className='text-red-600 ml-2'><FaBookmark></FaBookmark></button>
                </div>
                
            </div>
            <h2 className="text-4xl ">{title}</h2>
            <p>
                    {
                        hashtags.map( (hash,idx)=> <span key={idx}> <a href=''> #{hash}</a></span>)
                    }
                </p>
                <button onClick={() => handleMarkAsRead(reading_time, id)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;