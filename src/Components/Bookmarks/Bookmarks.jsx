import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';


const Bookmarks = ({bookmarks,markAsRead}) => {
    
    return (
        <div className='md:w-1/3 bg-slate-200 m-2'>
            <h1>Bookmarked Blogs: {bookmarks.length}</h1>
            <h3>
                Reading Time: {markAsRead}
            </h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                    bookmark={bookmark}
                    key={idx}
            ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    markAsRead:PropTypes.number
}

export default Bookmarks;