import React from 'react';

export default function NewsCard(props) {
  return (
    <div>
      <a href={`${props.nURL}`} style={{ textDecoration: "none" }} >
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img loading='lazy' src={`https://source.unsplash.com/random/500x500/?${props.nT}`} className="img-fluid rounded" alt="img" style={{ objectFit: "cover" }} />
            </div>
            <div className={`col-md-8 text-bg-${props.mode}`}>
              <div className="card-body">
                <h5 className="card-title">{props.nT}</h5>
                <p className="card-text"><i>- {props.nA}</i></p>
                <p className="card-text"><small className={`text-body-${props.mode}`}>{props.nCA}</small></p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}








        // <div className="card mx-2 my-3">
        //   <div >
        //     <div>
        //       <img src={`https://source.unsplash.com/random/400x400/?${props.nT}`} alt="img" className="rounded-top-2" style={{ width: "100%", height: "auto", maxHeight: "300px" }} />
        //     </div>
        //     <div className="p-2 w-100">
        //       <div className="card-body">
        //         <h5 className="card-title">{props.nT}</h5>
        //         <p className="card-text"><i>{props.nA}</i></p>
        //         <p>Lorem asdasldknasldda aslkndlkasndkanslkda dal...</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>