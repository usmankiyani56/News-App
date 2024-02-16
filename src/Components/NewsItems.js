import React, { Component } from 'react'

export class NewsItems extends Component {
    
    render() {
    
   let  {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
    <div className='my-4'> 
  <div className="card" >
    
  <img src={!imageUrl?"https://www.cnet.com/a/img/resize/9d8c99acdd2b3f90c8e1c34412860bbf9fff9f68/hub/2023/05/18/1488985f-cccb-487c-94e9-f35db6e79174/netflix-logo-intro-stripes-red-ads-play.jpg?auto=webp&fit=crop&height=675&width=1200":imageUrl} className="card-img-top" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">{title}...<span class="badge text-bg-info">{source}</span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small class="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
</div>  
      </div>
    )
  }
}

export default NewsItems
