import '../App.css';
import mapicon from '../placeholder.png'

export default function Card(props){
    return(
        <div className="card">
          <img className="card-img" src={process.env.PUBLIC_URL+'/images/'+props.img}></img>
          <div className="card-details">
            <div className="detail-1">
            <div className="locate">
            <img src={mapicon} className='mapIcon'></img>
            <h4 className='place'>{props.location}</h4>
            <a className='gmap' href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
            </div>
            <div className="name"><h2>{props.title}</h2></div>
            </div>
            <div className="detail-2">
            <div className="dates"><h5>{props.startDate} - {props.endDate}</h5></div>
            <div className="descript"><p>{props.description}</p></div>
            </div>
            
          </div>
        </div>
    )
}