import React, {useEffect} from 'react';
import ScreenHeader from "../../components/Headers/ScreenHeader";
import {Container} from "reactstrap";
import TransferList from '../../components/ImageSlider/TransferList';
import AdsSliderReview from '../../components/ImageSlider/AdsSliderReview';
import ImageSliderDetail from '../../components/ImageSlider/ImageSliderDetail';
import {useDispatch} from 'react-redux'
import {FeatchImageSliderUsing, FeatchImageSlider} from '../../../Application/redux/actions/ImageSliderAction';

const ImageSlider = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FeatchImageSliderUsing());
    }, []);

    return (
        <>
            <ScreenHeader/>
            <Container className="mt--7" fluid>
                <AdsSliderReview/>
                <TransferList/>
                <ImageSliderDetail/>
            </Container>
        </>
    );
}

export default ImageSlider;
