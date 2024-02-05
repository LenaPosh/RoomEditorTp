import React from "react";
import TopMenu from "../components/TopMenu";
import StartPageOne from "../components/StartPageOne";

const StartPage: React.FC = () => {
    const [isStartPageVisible, setStartPageVisible] = React.useState(true);

    const handleClose = () => {
        setStartPageVisible(false);
    };

    return (
        <div>
            {isStartPageVisible && <StartPageOne onClose={handleClose} />}
            <TopMenu/>
        </div>
    );
};


export default StartPage;
