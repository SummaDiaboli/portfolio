import React from "react"

const DocumentScroll = () => {
    const printScroll = () => console.log("scrolling")
    return <div onScroll={printScroll}></div>
}

export default DocumentScroll
