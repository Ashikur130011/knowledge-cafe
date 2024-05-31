import PropTypes from 'prop-types'


const Bookmark = ({bookmark}) => {
    const{title} = bookmark
    
    return (
        <div>
            
            <div className='text-start bg-slate-400 m-4 p-4 rounded-xl'>
            <h2 className='text-2xl '>{title}</h2>
        </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object
}
export default Bookmark;