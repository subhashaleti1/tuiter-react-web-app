import TuitItem from "./tuit-item";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";


const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return (
        <div className="list-group wd-list-group">
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
            </ul>
            {
                tuits.map(tuit => {
                    return (
                        <TuitItem
                            key={tuit._id}
                            tuit={tuit}
                        />
                    );
                })
            }
        </div>
    );
}

export default TuitList;