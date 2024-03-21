import backgroundImageMobile from '../../assets/mobile/image-footer.jpg'
import backgroundImageTablet from '../../assets/tablet/image-footer.jpg'
import backgroundImageDesktop from '../../assets/desktop/image-footer.jpg'
import { NumberComponent } from '../NumberComponent/NumberComponent'

export const FooterComponent = () => {
  return (
    <div className='relative mt-[167px] lg:pb-[114px]'>
      <div className='relative w-full h-full object-cover z-10 flex flex-col justify-center items-center m-auto'>
        <img className='block sm:hidden md:hidden lg:hidden' src={backgroundImageMobile} alt="Background Image" />
        <img className='hidden sm:block md:block lg:hidden' src={backgroundImageTablet} alt="Background Image" />
        <img className='hidden sm:hidden lg:block' src={backgroundImageDesktop} alt="Background Image" />
        <div className='absolute inset-0 bg-green opacity-[90%] z-20'/>
        <div className="absolute top-[-107px] left-1/2 transform -translate-x-1/2 z-30">
          <NumberComponent number={'02'} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-6 lg:flex-row lg:gap-20 lg:justify-around absolute z-40 top-0 pt-[92px] lg:px-[165px]">
        <h2 className="text-light font-black text-center text-[32px] leading-[36px] md:text-[40px] md:leading-[44px] mb-6 md:mb-8 md:px-[130px] lg:px-0 lg:mb-0 lg:text-left">Experience more together</h2>
        <p className='text-light font-medium text-lg text-center leading-[26px] md:px-[70px] lg:px-0 lg:text-left lg:w-[50%]'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        <button className="w-[193px] h-[58px] bg-dark_purple rounded-[29px] text-light font-black hover:bg-[#B18BDD] mt-8 md:mt-10 lg:mt-0 mb-[72px] lg:mb-0">Download <span className="text-light_purple">v1.3</span></button>
      </div>
    </div>
  )
}