import React from "react";
import ss from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}/>
            </div>
            <div className={ss.descriptionBlock}>
                <div>ava+description</div>
            </div>
        </div>
    )
};
export default ProfileInfo