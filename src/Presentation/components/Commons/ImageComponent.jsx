import React, {useState, useEffect} from 'react';
import {ApiGet} from '../../../Infrastucture/api/ApiCaller';
import {GetImage} from '../../../Infrastucture/api/ApiEndpoint';

const noImage = require("../../../assets/img/theme/no_image.png").default;


const ImageComponent = ({image, style, className, isFromAPI}) => {
    const [ImgState, setImgState] = useState(noImage);

    useEffect(() => {
        async function ChangeImg() {
            if(image != null || !(image === undefined)) {
                if (isFromAPI) {
                    await ApiGet(GetImage, {imageUrl: image}).then(res => {
                        var img = res.data.resData;
                        setImgState(img);
                    }).catch(err => {
    
                    })
                }
                else {
                    setImgState(image);
                }
            }           
        }
        ChangeImg();
    }, [image])

    return (
        <>
            <img alt="..." className={className}style={style} src={ImgState}/>
        </>
    );
}

export default ImageComponent;
