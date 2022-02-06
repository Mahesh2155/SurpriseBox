import React, { useState } from "react";

const SurpriseBox = () => {
    const [userName, setUserName] = useState("");
    const [countNumberOfVisit, setCountNumberOfVisit] = useState(1);
    const [numberOfUsersVisted, setNumberOfUsersVisted] = useState([]);
    const [message, setMessage] = useState({});

    const surpriseBoxwinningNumber = [1, 2, 4, 8];

    const SubmituserName = () => {
        if (userName.trim().length <= 0) {
            alert("please type user name");
            return false;
        }
        const getUserPreviousResult = numberOfUsersVisted?.filter(
            (item) => item.userName === userName
        );
        if (getUserPreviousResult.length > 0) {
            if (
                surpriseBoxwinningNumber.includes(
                    getUserPreviousResult[0].userCount
                )
            ) {
                showLooserOrWinner(true, userName);
            } else {
                showLooserOrWinner(false, userName);
            }
        } else {
            if (surpriseBoxwinningNumber.includes(countNumberOfVisit)) {
                showLooserOrWinner(true, userName);
            } else {
                showLooserOrWinner(false, userName);
            }
            setCountNumberOfVisit(countNumberOfVisit + 1);
            setNumberOfUsersVisted([
                ...numberOfUsersVisted,
                { userName: userName, userCount: countNumberOfVisit },
            ]);
        }
        function showLooserOrWinner(status, userName) {
            if (status) {
                setMessage({
                    messageColour: "winner",
                    showMessage: `Congratulations ${userName} you are winnner`,
                });
            } else {
                setMessage({
                    messageColour: "looser",
                    showMessage: `Hi ${userName} you are looser`,
                });
            }
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
