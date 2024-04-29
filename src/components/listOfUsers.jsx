import Dummy from '../assets/Dummy.png'

const UserItem = ({ user, tagUser }) => (
    <div onClick={() => tagUser(user.name)} className="flex gap-2 p-2 border-2 border-slate-900 m-2 bg-slate-700 text-slate-300 hover:bg-slate-900 cursor-pointer">
        <img src={user.photo?? Dummy} alt="" className="w-[1.5em] rounded-[50%]"/>
        {user.name?? user.err}
    </div>
)

const ListOfUsers = ({ list, setTag, setSearchResults }) => {
    const tagUser = (username) => {
        setTag(username)
        setSearchResults([])
    }

    return (
        <div className="w-full rounded">
            {list?.map((user, index) => (
                <UserItem key={index} user={user} tagUser={tagUser} />
            ))}
        </div>
    )
}

export default ListOfUsers
