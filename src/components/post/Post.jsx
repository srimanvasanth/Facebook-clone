import { MoreVert } from '@material-ui/icons'
import './post.scss'

export default function Post(){
    return(
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/src/assets/person/2.jpg" alt="" className="postProfileImg" />
                        <span className="username">Sriman Vasanth</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It's my first post:)</span>
                    <img src="/src/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="src/assets/like.png" alt="" className="likeIcon" />
                        <img src="src/assets/heart.png" alt="" className="likeIcon" />
                        <span className="likeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">9 comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}