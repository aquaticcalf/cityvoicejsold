import { useContext, useState } from'react'
import { useNavigate } from'react-router-dom'
import { AuthContext } from '../axios/authProvider'
import Dummy from '../assets/Dummy.png'

const ProfileLink = ({ username, profilePic, navigate }) => (
    <div onClick={() => navigate(`/profile/${username}`)} className="mb-2 items-center justify-center w-full flex gap-3 items-center p-2 bg-cityvoice-blue hover:bg-cityvoice-yellow rounded-[100px] cursor-pointer">
    <img className="rounded-full w-[30px] h-[30px]" src={profilePic} alt="pp" />
    <span className="ml-1 text-2xl font-bold">{username}</span>
    </div>
)

const NavItem = ({ children, navigate, to }) => (
    <div onClick={() => navigate(to)} className="w-full p-2 text-center rounded-[100px] bg-cityvoice-blue hover:bg-cityvoice-yellow cursor-pointer">
    {children}
    </div>
)

const LeftHome = () => {
    const navigate = useNavigate()
    const { auth, setAuth } = useContext(AuthContext)

    const [myProfilePic, setMyProfilePic] = useState(Dummy)
    const myUserName = auth?.username?? null

    const handleLogout = () => {
        setAuth(null)
        window.location.reload()
    }

    return (
        <div className="w-[20%] h-[100%] flex flex-col p-4 items-center space-y-2">
        <p className="font-bold text-4xl my-4 text-cityvoice-red">City Voice</p>
        {myUserName? (
            <div className="flex flex-col space-y-4 w-full">
            <ProfileLink username={myUserName} profilePic={myProfilePic} navigate={navigate} />
            <NavItem navigate={navigate} to="/following">
            Following
            </NavItem>
            </div>
        ) : (
            <NavItem navigate={navigate} to="/login">
            Log In
            </NavItem>
        )}
        <NavItem navigate={navigate} to="/">
        Local Feed
        </NavItem>
        <NavItem navigate={navigate} to="/globalFeed">
        Global Feed
        </NavItem>
        {myUserName && (
            <>
            <div className="grow" />
            <NavItem navigate={navigate} to="#" onClick={handleLogout}>
            Log Out
            </NavItem>
            </>
        )}
        </div>
    )
}

export default LeftHome
