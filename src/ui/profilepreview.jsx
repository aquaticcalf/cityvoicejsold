function Profilepreview(props) {
  return(
    <div className="w-full max-w-[350px] flex cursor-pointer gap-2">
      <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-[50%]"></div>
      <div className="flex flex-col grow">
        <div className="text-[15px] font-bold flex gap-2">
          {props.displayname}
          <div className="font-normal">( {props.verified} )</div>
        </div>
        <div className="text-[#8E8D8D] text-[13px]">@{props.username} | {props.place}</div>
      </div>
    </div>
  )
}

export default Profilepreview
