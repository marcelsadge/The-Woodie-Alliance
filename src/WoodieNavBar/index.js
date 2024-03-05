import React, { useState, useEffect } from "react";

import { IoFlowerSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { WoodieMainNav, WoodieOption, WoodieTitle, WoodieGroup } from "./styles";
import WoodieSearchBar from "../WoodieSearchBar";

function WoodieNavBar() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

    const handleWindowSize = () => {
      setDesktop(window.innerWidth > 1200);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
        return () => window.removeEventListener("resize", handleWindowSize);
    });


    return (
        <WoodieMainNav>
            <IoFlowerSharp size={'20px'} color={'white'} style={{ marginLeft: '1vw' }} />
            <WoodieTitle>
                The Woodie Alliance
            </WoodieTitle>
            <IoFlowerSharp size={'20px'} color={'white'} />
            {isDesktop ? (
                <WoodieGroup>
                    <WoodieOption>
                        Teams
                    </WoodieOption>
                    <WoodieOption>
                        Events
                    </WoodieOption>
                    <WoodieOption>
                        Trends
                    </WoodieOption>
                    <WoodieOption>
                        Insights
                    </WoodieOption>
                    <WoodieSearchBar />
                </WoodieGroup>
            ) : (
                <FaBars size={'20px'} color={'white'} style={{ marginLeft: '50vw', marginRight: '3vw' }}/>
            )}
        </WoodieMainNav>
    );
}

export default WoodieNavBar;