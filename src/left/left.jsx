import Solidbutton from "../ui/solidbutton.jsx"
import Outlinebutton from "../ui/outlinebutton.jsx"
import Profilepreview from "../ui/profilepreview.jsx"

function Left() {

    return (
        <div className="p-[20px] grow flex-col gap-5 items-center max-w-[400px] text-[#FFFFFF] h-screen relative hidden xl:flex">
          <div className="text-[#FFFFFF] text-[15px] bg-[#FFFFFF] bg-opacity-[0.12] flex items-center justify-center rounded-[5px] w-full max-w-[350px] h-[50px] cursor-pointer">Search</div>
          <div className="text-[10px] w-full max-w-[350px]">
            This domain is part of the decentralized social network powered by CityVoice.
          </div>
          <hr className="border-[0.2px] w-[98%] border-[#636363]" />
          <div className="h-[200px]">

          </div>
          <div className="text-[10px] w-full max-w-[350px]">
            The official CityVoice server operated by the people of Visakhapatnam
          </div>
          <div className="text-[#B5B5B5] font-bold text-[13px] w-full max-w-[350px]">
            ADMINISTERED BY:
          </div>
          <Profilepreview displayname="Visakhapatnam" verified="verified" username="admin" place="Visakhapatnam"/>
          <Outlinebutton>
            Learn More
          </Outlinebutton>
        </div>
    )
}

export default Left
