import './App.css'
import { HeroComponent } from './components/HeroComponent/HeroComponent'
import { HeroImagesLeft } from './components/HeroImagesComponents/HeroImagesLeft'
import { HeroImagesRight } from './components/HeroImagesComponents/HeroImagesRight'
import { LogoComponent } from './components/LogoComponent/Logo.Component'
import { NumberComponent } from './components/NumberComponent/NumberComponent'

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
        < NumberComponent />
      </div>
     

      
     

      
      Built for modern use

      Smarter meetings, all in one place

      Send messages, share files, show your screen, and record your meetings — all in one 
      workspace. Control who can join with invite-only team access, data encryption, and data export.

      02
      Experience more together
      Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.

      Download v1.3
    </div>
  )
}

