export const HeroComponent = () => {
  return (
    <div className="px-6 mt-12 md:px-[215px] lg:px-3 md:mt-[72px]">
        <h1 className="text-dark font-black text-[40px] leading-[44px] text-center mb-6 xl:mb-[34px] md:text-5xl md:leading-[48px] xl:text-[64px] xl:leading-[64px]">Group Chat For Everyone</h1>
        <p className="text-grey text-base font-medium text-center leading-[26px] xl:text-lg mb-8"> Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row mb-[80px] xl:mb-[110px]">
            <button className="w-[193px] h-[58px] bg-green rounded-[29px] text-light font-black hover:bg-[#71C0D4]">Download <span className="text-light_blue">v1.3</span></button>
            <button className="w-[139px] h-[58px] bg-dark_purple rounded-[29px] text-light font-black hover:bg-[#B18BDD]"> What is it?</button>
        </div>
    </div>
  )
}

