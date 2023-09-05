import React, { useState } from "react";
import { SwipeableDrawer, Button } from "@mui/material";
import { MenuOutlined } from '@ant-design/icons'
import HomeImg from "../assets/images/Foundation.png";
import CollectiveImg from "../assets/images/2.png";
import Soon from "../assets/images/SOON.png";
import SenseLabsImg from "../assets/images/Vector.png";
import AnalyticsImg from "../assets/images/analytic.png";
import FeedImg from "../assets/images/feed.png";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setIsOpen(open);
    };

    return (
        <div className='lg:hidden'>
            <React.Fragment key="left">
                <Button onClick={toggleDrawer(true)}><h1 className="text-white"><MenuOutlined /></h1></Button>
                <SwipeableDrawer
                    anchor="left"
                    open={isOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <div className="bg-black h-full "> 
                        <div
                            className="flex cursor-pointer items-center mb-2 mt-2"
                        >
                            <img className="max-lg:w-4" src={HomeImg} alt="..." />
                            <h1 className="text-white text-base">Home</h1>
                        </div>
                        <div className="flex  mb-2">
                            <img className="max-lg:w-4" src={CollectiveImg} alt="..." />
                            <h1 className="text-white">Collective</h1>
                            <img className="h-2" src={Soon} alt="..." />
                        </div>
                        <div className="flex  mb-2">
                            <img className="max-lg:w-4" src={SenseLabsImg} alt="..." />
                            <h1 className="text-white text-base">Sense Labs</h1>
                        </div>
                        <div className="flex  mb-2">
                            <img className="max-lg:w-4" src={AnalyticsImg} alt="..." />
                            <h1 className="text-white text-base">Analytics</h1>
                            <img className="h-2" src={Soon} alt="..." />
                        </div>
                        <div className="flex  mb-2">
                            <img className="max-lg:w-4" src={FeedImg} alt="..." />
                            <h1 className="text-white text-base">Feed</h1>
                        </div>
                    </div>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
};

export default SideBar;
