import React, { useEffect, useState, useRef } from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import '../../index.css'
import {CDN_URL, DEFAULT_FOOD_IMAGE_URL} from '../utils/constants'


const Dishes = () => {
    const [dish, setDish] = useState([]);
    const [title, setTitle] = useState('');
    const containerRef = useRef(null);
    
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9777315&lng=72.8273249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            setTitle(json?.data?.cards[0]?.card?.card?.header?.title);
            setDish(json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []); // Provide fallback for dish
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(()=> {
    fetchData();
    }, [])

    const scrollPrev = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const scrollWidth = containerRef.current.scrollWidth;
            const scrollDistance = (scrollWidth - containerWidth) / 4; // Divide by 4 since we want to scroll through 5 images at a time

            containerRef.current.scrollLeft -= scrollDistance;
        }
    };

    const scrollNext = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const scrollWidth = containerRef.current.scrollWidth;
            const scrollDistance = (scrollWidth - containerWidth) / 4; // Divide by 4 since we want to scroll through 5 images at a time

            containerRef.current.scrollLeft += scrollDistance;
        }
    };

    return (
        <div>
            <div className='flex justify-between ml-11'>
                <span className='font-bold text-2xl'>{title}</span>
                <div className='mr-[20px] flex text-2xl'>
                    <span onClick={scrollPrev} className='flex items-center justify-center w-8 p-1 h-8 mr-2 cursor-pointer bg-green-300 rounded-full'><GrFormPrevious /></span>
                    <span onClick={scrollNext} className='flex items-center justify-center w-8 p-1 h-8 cursor-pointer bg-green-300 rounded-full'><GrFormNext /></span>
                </div>
            </div>
            {dish.length > 0 && (
                <div className="flex justify-between overflow-x-auto gap-10 ml-32 mr-32 mt-3 hide-scrollbar" ref={containerRef}>
                    {dish.map(({ imageId }) => (
                        <img key={imageId} className="w-[144px] h-[180px] m-auto" src={imageId ? `${CDN_URL}${imageId}` : DEFAULT_FOOD_IMAGE_URL} alt="dish-image" />
                    ))}
                </div>
            )}
        <div>
                    <hr className='w-[85%] mx-auto mt-10' />
        </div>
        </div>
    )
}

export default Dishes