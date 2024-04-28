import React from "react";

type Props = {
    name: string;
    about: string;
}

const Profile = ({name, about}: Props) => {
    return (
        <div>
            <div>{name}</div>
            <div>{about}</div>
        </div>
    );
}

export default Profile;