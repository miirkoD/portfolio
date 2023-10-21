import React,{useState,useEffect} from "react";
import './PhotoGallery.css';

const PhotoGallery =()=>{
    const[images,setImages]=useState([
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ]);

    const [showGallery, setShowGallery] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setShowGallery(true);
        },1000);
    },[]);

    return(
        <div className={`photo-gallery ${showGallery ? 'visible': ''}`}>
            {images.map((image,index)=>(
            <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </div>
    );
};
export default PhotoGallery;