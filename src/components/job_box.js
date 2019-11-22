import React from "react";

export default props => {
  const shortDescription = () => {
    const desc = [
      props.job.city,
      props.job.country,
      props.job.remote ? "Remoto" : "",
      `$${props.job.salary}`
    ];
    return desc.filter(obj => obj).join(" -- ");
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={props.job.logo_url}
              alt={props.job.title}
              title={props.job.title}
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <button
              className="button is-text"
              onClick={() => props.toggleModal(props.job)}
            >
              <strong>{props.job.title}</strong>&nbsp;
              <small>{props.job.company.name}</small>
            </button>
            <p>{shortDescription()}</p>
          </div>
        </div>
        <div className="media-right">
          <button
            className="button is-success"
            onClick={() => props.toggleFavorite(props.job)}
          >
            <span className="icon">
              <i className={`${props.favorite ? "fas" : "far"} fa-heart`}></i>
            </span>
            <span>{props.favorite ? "Saved" : "Save"}</span>
          </button>
        </div>
      </article>
    </div>
  );
};
