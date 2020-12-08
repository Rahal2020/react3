import React from 'react';
import image from "../../myProfile.jpg";
const ProfilPhoto = ()=> { 
    return ( 
    <div className="image">
<img src={image} alt='myprofile'/>
</div>
);
};
export default ProfilPhoto;