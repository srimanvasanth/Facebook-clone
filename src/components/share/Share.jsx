import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import './share.scss'

export default function Share(){
    return(
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/src/assets/person/2.jpg" alt="" className="shareProfileImg" />
                    <input className="shareInput" placeholder="What's on your mind?"></input>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon'/>
                            <span className="shareText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon'/>
                            <span className="shareText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon'/>
                            <span className="shareText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                            <span className="shareText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}