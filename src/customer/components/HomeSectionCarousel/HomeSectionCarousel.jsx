import React, { useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';
import { men_kurta } from '../../../Data/men_kurtas';
const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
   
    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    const items =data.slice(0,10).map((item) => <HomeSectionCard  product={item} />);

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5 '>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 && 
                    <Button
                        variant="contained"
                        className='z-50 bg-white'
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(-50%) rotate(0deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)", color: "black", fontSize: 24 }} />
                    </Button>
                }
                {activeIndex > 0 && 
                    <Button
                        variant="contained"
                        className='z-50 bg-white'
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(0deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ color: "black", fontSize: 24 }} />
                    </Button>
                }
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
