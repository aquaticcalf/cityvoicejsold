import Solidbutton from "../ui/solidbutton.jsx"
import Outlinebutton from "../ui/outlinebutton.jsx"

function Right() {

    return (
        <div className="p-[20px] grow flex-col gap-3 items-center max-w-[400px] text-[#FFFFFF] h-screen relative hidden xl:flex">
          <div className="text-[#0047FF] font-bold text-[30px]">CITYVOICE</div>
          <hr className="border-[0.2px] w-[98%] border-[#636363]" />
          <div className="h-[200px]">

          </div>
          <hr className="border-[0.2px] w-[98%] border-[#636363]" />
          <div className="text-[10px] max-w-[350px]">
            Log in to CityVoice to connect with your community and shape your city's future! Follow profiles of local businesses, organizations, and  individuals, as well as hashtags that highlight the best of your city.  Favorite, share, and reply to posts about local events, news, and hidden gems. Plus, engage with local governance by following officials, community groups, and initiatives, and join conversations that drive positive change.With CityVoice's decentralized network, you can interact with others from your account on a different server, expanding  your reach and connections across and beyond the city.
          </div>
          <Solidbutton>
            Create Account
          </Solidbutton>
          <Outlinebutton>
            Login
          </Outlinebutton>
        </div>
    )
}

export default Right
