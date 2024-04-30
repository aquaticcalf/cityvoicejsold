import Feednav from "./feednav.jsx"
import Actionbutton from "./actionbutton.jsx"
import Solidbutton from "../ui/solidbutton.jsx"
import Post from "../ui/post.jsx"

function Middle() {

    return (
        <div className="w-[100vw] max-w-[600px] bg-[#000000] text-[#FFFFFF] h-screen relative">
            <div className="h-screen overflow-y-auto">
              <Feednav />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
            <Actionbutton />
        </div>
    )
}

export default Middle
