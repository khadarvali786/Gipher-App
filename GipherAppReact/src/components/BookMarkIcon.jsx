import { useState } from "react"

export default function BookMarkIcon({gif,onBookMark,isBookMarked}){
    const bookMarked = ()=>{
        onBookMark(gif)
    }
    return (
        <span onClick={bookMarked}><i className={`bi bs ${isBookMarked? `bi-bookmark-fill`:`bi bi-bookmark`}`} style={{color:isBookMarked?"green":""}}></i></span>
    )
}