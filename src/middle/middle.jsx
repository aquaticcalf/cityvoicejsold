import Feednav from "./feednav.jsx"
import Actionbutton from "./actionbutton.jsx"
import Solidbutton from "../ui/solidbutton.jsx"

function Middle() {

    return (
        <div className="w-[100vw] max-w-[600px] bg-[#000000] text-[#FFFFFF] h-screen relative">
            <Feednav />
            <Actionbutton />
        </div>
    )
}

export default Middle
