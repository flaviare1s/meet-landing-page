import backgroundImageMobile from '../../assets/mobile/image-footer.jpg'
import backgroundImageTablet from '../../assets/tablet/image-footer.jpg'
import backgroundImageDesktop from '../../assets/desktop/image-footer.jpg'


export const FooterComponent = () => {
  return (
    <div className='relative'>
        <div className='relative w-full object-cover z-10 flex flex-col justify-center items-center m-auto'>
            <img className='block md:hidden lg:hidden' src={backgroundImageMobile} alt="Background Image" />
            <img className='hidden md:block lg:hidden' src={backgroundImageTablet} alt="Background Image" />
            <img className='hidden md:hidden lg:block' src={backgroundImageDesktop} alt="Background Image" />
            <div className='absolute inset-0 bg-green opacity-[85%] z-20'/>
        </div>
        <div className="flex flex-col justify-center items-center px-6 lg:flex-row lg:justify-between absolute z-40 top-0 pt-[92px] lg:py-[116px]">
            <h2 className="text-light font-black text-center text-[32px] leading-[36px] md:text-[40px] md:leading-[44px] mb-6 md:mb-8 xl:mb-0">Experience more together</h2>
            <p className='text-light font-medium text-lg text-center leading-[26px] lg:text-left'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
            <button className="w-[193px] h-[58px] bg-dark_purple rounded-[29px] text-light font-black hover:bg-[#B18BDD] mt-8 md:mt-10 lg:mt-0 mb-[72px] md:mb-[66px] lg:mb-0">Download <span className="text-light_purple">v1.3</span></button>
        </div>
    </div>
  )
}
