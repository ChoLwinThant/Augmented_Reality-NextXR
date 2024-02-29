import React, { Component } from 'react';
import './Experience.css';
import arImg from '../../images/ar-img.jpg';
import { saveAs } from 'file-saver';

class Experience extends Component {
  downloadImage = () => {
    fetch(arImg)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'ar-image.jpg');
      })
      .catch((error) => {
        console.error('Downloading image:', error);
      });
  };

  render() {
    return (
      <div id="experience" className="experience-container">
        <h1 className="experience-sub-title">AR Image Experience</h1>
        <img src={arImg} alt="AR Image" className="experience-image" />
        
        <button className="experience-button" onClick={this.downloadImage}>
          Click here to download the image
        </button>
      </div>
    );
  }
}

export default Experience;
