import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
          <span className=" badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
          </div>
          
        <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author? 'unknown': author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more..</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
