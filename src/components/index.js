import React, { useState } from "react";

const SurpriseBox = () => {
    const [userName, setUserName] = useState("");
    const [countNumberOfVisit, setCountNumberOfVisit] = useState(1);
    const [numberOfUsersVisted, setNumberOfUsersVisted] = useState([]);
    const [message, setMessage] = useState({});

    const surpriseBoxwinningNumber = 2;

    const SubmituserName = () => {
        if (!numberOfUsersVisted.includes(userName)) {
            setNumberOfUsersVisted([...numberOfUsersVisted, userName]);
            setCountNumberOfVisit(countNumberOfVisit + 1);
            if (surpriseBoxwinningNumber === countNumberOfVisit) {
                setMessage({
                    messageColour: "winner",
                    showMessage: `hii ${userName} you are winnner`,
                });
            } else {
                setMessage({
                    messageColour: "looser",
                    showMessage: `hii ${userName} you are looser`,
                });
            }
        } else {
            setMessage({
                messageColour: "visitsecondtime",
                showMessage: "you can't visit second time",
            });
        }
    };

    return (
        <>
            <h3>please enter your Enter user name {countNumberOfVisit - 1}</h3>
            <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <button onClick={() => SubmituserName()}>click</button>
            <div className={message.messageColour}>
                <b>{message.showMessage}</b>
            </div>
        </>
    );
};

export default SurpriseBox;
