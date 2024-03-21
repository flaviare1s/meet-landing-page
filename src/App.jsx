import './App.css'
import { FooterComponent } from './components/FooterComponent/FooterComponent'
import { HeroComponent } from './components/HeroComponent/HeroComponent'
import { HeroImagesLeft } from './components/HeroImagesComponents/HeroImagesLeft'
import { HeroImagesRight } from './components/HeroImagesComponents/HeroImagesRight'
import { LogoComponent } from './components/LogoComponent/Logo.Component'
import { NumberComponent } from './components/NumberComponent/NumberComponent'
import { PhotosComponent } from './components/PhotosComponent/PhotosComponent'
import { ProductFeaturesComponent } from './components/ProductFeaturesComponent/ProductFeaturesComponent'

export function App() {

  return (
    <div className='font-hat'>
      <div>
        < LogoComponent />
      </div>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>< HeroImagesLeft /></div>
        <div className='col-span-1'>< HeroImagesRight /></div>
        <div className='col-span-2 flex justify-center'>< HeroComponent /></div>
      </div>
      <div>
        < NumberComponent number={'01'} />
      </div>
      <div>
        < PhotosComponent />
      </div>
      <div>
        < ProductFeaturesComponent />
      </div>
      <div className='relative mt-[50%]'>
        < FooterComponent />
        <div className='absolute z-50 top-[-25%] left-[50%] translate-x-[-50%]'>
          < NumberComponent number={'02'} />
        </div>
      </div>
    </div>
  )
}

