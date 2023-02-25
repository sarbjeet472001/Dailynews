import React from "react";

const newsitem = (props) => {
  return (
    <>
      <div className="card">
      <div>
        <span style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'flex-end',
          right: 0
        }} class="badge rounded-pill bg-danger">
            {props.source}
          </span>
        </div>
        <img
          src={
            props.urlToImage
              ? props.urlToImage
              : "https://th.bing.com/th/id/OIP.JLGSYftRN5ti_EgHS2WL8wHaHa?pid=ImgDet&w=500&h=500&rs=1"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author ? props.author : "Unknown"} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a href={props.url} target="_blank" rel="noopener" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default newsitem;
