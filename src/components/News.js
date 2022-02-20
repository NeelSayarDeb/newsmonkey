import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export default function News(props) {
  
  const [article, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  let URL = `https://newsapi.org/v2/top-headlines?q=${props.query}&county=in&category=sports&apiKey=29a674908d634e04bfb2b6a86921930a`
  const getDate = async () =>{
    setLoading(true)
    let data = await fetch(URL);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    document.title = `${props.query}Monkey`
    setLoading(false)
  }
  useEffect(() => {
    getDate()
  }, [])
  
  return (
    <>
        <div className='container my-2'>
            <h2>Top Headlines</h2>
            {!loading && 
            <div className="row">
              {article.map((elem, index)=>{
                  return <div className="col-md-6 my-1" key={elem.url}>
                      <Newsitem 
                      title={elem.title} 
                      description={elem.description}
                      imageUrl={elem.urlToImage} 
                      newsURL={elem.url}/>
                  </div>
              })}
            </div>
            }
            {loading && <Spinner/>}
        </div>
        
    </>
  )
}
