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
      <div className='grid grid-cols-2 xl:grid-cols-3'>
        <div className='col-span-1'>< HeroImagesLeft /></div>
        <div className='col-span-1 xl:order-last'>< HeroImagesRight /></div>
        <div className='col-span-2 xl:col-span-1 flex justify-center'>< HeroComponent /></div>
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
      <div>
        < FooterComponent />
      </div>
    </div>
  )
}

