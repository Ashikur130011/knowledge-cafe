
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const[bookmarks, setBookmarks] = useState([])
  const[markAsRead,setMarkAsRead] = useState(0)

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead= (time,id)=>{
    const readingTime = markAsRead + time
    setMarkAsRead(readingTime)
    //remove bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>  
      <Blogs handleBookmarks={handleBookmarks}
        handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </div>
    </>
  )
}

export default App
