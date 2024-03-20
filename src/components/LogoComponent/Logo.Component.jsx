import logo from '../../assets/logo.svg'

export const LogoComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-12 pb-[54px] md:pb-16 xl:pt-20 xl:pb-[60px]'>
        <img src={ logo } alt="Logo" />
    </div>
  )
}

