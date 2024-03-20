import photo1 from '../../assets/desktop/image-woman-in-videocall.jpg'
import photo2 from '../../assets/desktop/image-women-videochatting.jpg'
import photo3 from '../../assets/desktop/image-men-in-meeting.jpg'
import photo4 from '../../assets/desktop/image-man-texting.jpg'

export const PhotosComponent = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 px-6 gap-6 mb-16 md:mb-12 md:px-10 md:gap-[11px] xl:px-[165px] xl:gap-[30px] xl:mb-20">
        <img className="rounded-lg" src={ photo1 } alt="People using Meet" />
        <img className="rounded-lg" src={ photo2 } alt="People using Meet" />
        <img className="rounded-lg" src={ photo3 } alt="People using Meet" />
        <img className="rounded-lg" src={ photo4 } alt="People using Meet" />
    </div>
  )
}

