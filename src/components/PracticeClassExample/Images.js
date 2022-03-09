import React ,{Component} from 'react';
const widthImg={
    width:'100%'
}

const img1 = "https://www.w3schools.com/howto/img_snow.jpg";
const img2 = "https://www.w3schools.com/howto/img_forest.jpg";
const img3 = "https://www.w3schools.com/howto/img_mountains.jpg";
function Images(){
    return(
        <>
            <div className="row">
                <div className="column">
                    <img src={img1} alt="Snow" style={widthImg}/>
                </div>
                <div className="column">
                    <img src={img2} alt="Forest" style={widthImg}/>
                </div>
                <div className="column">
                    <img src={img3} alt="Mountains" style={widthImg}/>
                </div>
            </div>
        </>
    )
}

export default Images;