import React from "react";
import nasa from './nasa.png';
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 px-0">
                    <img src={require(`../images/${who.avatarIcon}`)} className="img-fluid wd-rounded-images"  alt="img" height={80} />
                </div>
                <div className="col-xxl-7 col-xl-6 col-lg-5">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4 px-0">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;