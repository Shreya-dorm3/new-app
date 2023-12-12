import React from "react";
import "./carousel-container.css";
import { cardDetails } from "../../assets/utils/notification-configs";
import CarouselItem from "./carousel-item";

export default function AutoplayCarousel() {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
}