
import {useDispatch} from "react-redux";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FaRegComment} from "react-icons/fa";
import {AiFillHeart, AiOutlineRetweet} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";
import {updateTuit} from "../reducers/tuits-reducer";


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
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaRegComment ></FaRegComment>
                <span className='ms-1 wd-gray-color'>{stats.replies}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <AiOutlineRetweet/>
                <span className='ms-1 wd-gray-color'>{stats.retuits}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" onClick={()=>likeHandler()}>
               <AiFillHeart  color={`${stats.liked?"red":"gray"}`} />
                <span className='ms-1 wd-gray-color'>{stats.likes}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <BsUpload/>
            </div>
        </div>
        </>
    );
}

export default TuitStats;