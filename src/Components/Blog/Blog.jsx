import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,author_img,author,reading_time} = blog;
    return (
        <div className= 'pt-10'>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center '>
                <img className='w-10' src={author_img} alt="" />
                <div>
                <h4 >{author}</h4>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl ">{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;