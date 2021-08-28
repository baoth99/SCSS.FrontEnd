import React, { useState } from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from "reactstrap";

const CarouselSlider = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    if(!Array.isArray(items) || typeof items == 'undefine') {
        return (
            <>
                <h1>No Image</h1>
            </>
        )
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }


    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    // const slides = items.map((item) => {
    //     return (
    //       <CarouselItem
    //         onExiting={() => setAnimating(true)}
    //         onExited={() => setAnimating(false)}
    //         key={item.src}
    //       >
    //         <img src={item.src}  alt={item.altText} />
    //       </CarouselItem>
    //     );
    // });

       const RenderSlide = (data) => {
            let result = null;
            if(!Array.isArray(data)) {
                return result;
            }
            if (data.length > 0) {
                result = data.map((item, index) => {
                    return (
                        <CarouselItem
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={index}
                        >
                            <img src={item}  alt={item.altText} />
                        </CarouselItem>
                    )
                });
            }
            return result;
        }

    return (
            <>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {RenderSlide(items)}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </>
    );
}

export default CarouselSlider;
