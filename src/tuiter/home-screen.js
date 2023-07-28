import React from "react";
import TuitList from "./tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeScreen;