import './sidebar.scss'
import { Bookmark, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons'

export default function Sidebar(){
    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li><li className="sidebarListItem">
                        <PlayCircleFilledOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className='sidebarIcon'/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon'/>
                        <span className="sidebarListItemText">Courses</span>                        
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr'/>
                <ul className="friendsList">
                    <li className="friend">
                        <img src="src/assets/person/1.jpeg" alt="" className="friendImg" />
                        <span className="friendName">Laura Joe</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/11.jpeg" alt="" className="friendImg" />
                        <span className="friendName">James Samuel</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/3.jpeg" alt="" className="friendImg" />
                        <span className="friendName">Mary Gracia</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/4.jpeg" alt="" className="friendImg" />
                        <span className="friendName">Nancy Williams</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/7.jpeg" alt="" className="friendImg" />
                        <span className="friendName">George Miller</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/6.jpeg" alt="" className="friendImg" />
                        <span className="friendName">Maria Hernandez</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/8.jpeg" alt="" className="friendImg" />
                        <span className="friendName">Gwen Stacy</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/9.jpeg" alt="" className="friendImg" />
                        <span className="friendName">Jane Smith</span>
                    </li>
                    <li className="friend">
                        <img src="src/assets/person/10.jpeg" alt="" className="friendImg" />
                        <span className="friendName">Sarah Charles</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}