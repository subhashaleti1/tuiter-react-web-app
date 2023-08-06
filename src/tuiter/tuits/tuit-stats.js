
import {useDispatch} from "react-redux";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FaHeart, FaRegComment, FaThumbsDown} from "react-icons/fa";
import {AiFillHeart, AiOutlineRetweet} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";
import {updateTuit} from "../reducers/tuits-reducer";
import { updateTuitThunk } from "../services/tuits-thunks";


const TuitStats = ({stats}) => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const likeHandler=()=>{
        const g={likes:stats.likes,liked:stats.liked,id:stats._id};

        if(stats.liked)
        {
            g.likes=stats.likes-1;
            g.liked=false;
        }
        else{
            g.likes=stats.likes+1;
            g.liked=true;
        }
        dispatch(updateTuit(g))
    }

    return (
        <>

        <div className="row mt-2 ms-5">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaRegComment ></FaRegComment>
                <span className='ms-1 wd-gray-color'>{stats.replies}</span>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <AiOutlineRetweet/>
                <span className='ms-1 wd-gray-color'>{stats.retuits}</span>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2" >
                <FaHeart
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...stats, likes: stats.likes + 1 }))
                    }
                />
                <span className="ms-2">{stats.likes}</span>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2" >
                <FaThumbsDown

                    onClick={() =>
                        dispatch(updateTuitThunk({ ...stats, dislikes: stats.dislikes + 1 }))
                    }
                />
                <span className="ms-2">{stats.dislikes}</span>
            </div>


            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <BsUpload/>
            </div>
        </div>
        </>
    );
}

export default TuitStats;