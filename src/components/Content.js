import React from "react";
import ImageOne from "../images/img.jpg";
import ImageTwo from "../images/img-2.jpg";

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img
                    src={ImageOne}
                    alt="egg"
                    className="h-full rounded mb-20 shadow"
                />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">
                        Teriyaki Chicken Casserole
                    </h2>
                    <p className="mb-2">Tasty, delicious and nutritious</p>
                </div>
            </div>
            <div className="menu-card">
                <img
                    src={ImageTwo}
                    alt="egg"
                    className="h-full rounded mb-20 shadow"
                />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">
                        Chicken Enchilada Casserole
                    </h2>
                    <p className="mb-2">Tasty, delicious and nutritious</p>
                </div>
            </div>
        </>
    );
};

export default Content;
