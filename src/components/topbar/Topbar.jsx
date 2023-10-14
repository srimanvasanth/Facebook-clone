import './topbar.scss'
import { Person, Search, Notifications, Chat } from '@material-ui/icons'

export default function Topbar(){
    return(
        <div className='topbarCont'>
            <div className="topbarLeft">
                <span className="logo">Threadbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for a friend or posts" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <img src="/src/assets/person/2.jpg" alt="" className="topbarImg" />
                </div>
            </div>
        </div>
    
    )     
}