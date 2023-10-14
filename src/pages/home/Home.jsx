import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Share from '../../components/share/Share';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar/Topbar';
import './home.scss'

export default function Home(){
    return(
        <>
        <Topbar/>
        <div className='homeCont'>
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    )
}