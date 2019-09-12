import React from 'react';
import './Business.css';








class Business extends React.Component {
  render() {
    return (<div className="Business">
  <div className="Business image-container">{this.props.business.imageSrc}</div>
  <h2 className="Business h2">{this.props.business.name}</h2>
  <div className="Business-address">Address: {this.props.business.address}</div>
  <div className="Business-address">{this.props.business.city}</div>
  <div className="Business-address">{this.props.business.state}</div>
  <div className="Business-address">{this.props.business.zipCode}</div>
  <div className="Business-reviews">Reviews: <h3>{this.props.business.reviewCount}</h3></div>
  <div className="Business-reviews rating">Rating: {this.props.business.rating}</div>
</div>);
  }


}


export default Business;
