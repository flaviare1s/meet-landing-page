export const NumberComponent = ({number}) => {
  return (
    <div className="flex flex-col justify-center items-center m-auto">
        <div className="h-[84px] border border-l-light_grey"/>
        <div className="h-14 w-14 border border-y-light_grey rounded-full flex justify-center items-center mb-16 bg-light">
            <p className="text-grey font-black text-base leading-[26px]">{number}</p>
        </div>
    </div>
  )
}

