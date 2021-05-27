import React from 'react';

const NewsDisplay=(props)=>{
    const renderNews = props.newsData.map((data)=>{
        return(
            <div key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
           </div>
        )

    })
 
        return(
          <div>{renderNews}</div>
        )
   

  
}
export default NewsDisplay;