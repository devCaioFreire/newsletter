import Ellipse2 from '../assets/Ellipse 5 (1).svg';
import Ellipse from '../assets/Ellipse 5.svg';
import Rock from '../assets/Rock.png';
import RoundeCube from '../assets/Round Cube3.svg';
import Sphere from '../assets/Sphere.svg';
import Avatar from '../assets/avatar.png';
import { CustomForm } from '../components/mail.config';

export default function Home() {

  return (
    <div className="bg-backgroundMain w-full bg-cover sm:h-screen md:h-screen">
      <img src={Sphere} className="absolute -top-7 -left-7" />
      <img src={Ellipse} className="absolute bottom-0 -left-10" />
      <img src={Avatar} className="sm:hidden md:flex absolute h-[600px] left-10 bottom-0 xl:left-[182px] xl:h-[700px] 2xl:h-[700px]" />
      <img src={Rock} className="sm:hidden lg:flex absolute h-[230px] object-contain left-[18rem] bottom-24 xl:left-[449px]" />
      <img src={RoundeCube} className="sm:hidden lg:flex absolute object-contain right-0 bottom-0" />
      <img src={Ellipse2} className="sm:hidden lg:flex absolute object-contain h-[100px] right-0 xl:right-52 top-0" />

      <div
        className='flex items-center justify-center max-w-[54.813rem]
        sm:h-full
        2sm:h-screen
        md:justify-end md:h-screen
        lg:ml-[45%] lg:mr-[5%]
        xl:mr-40 xl:ml-[50%] xl:max-w-full'>

        <div
          className='flex flex-col gap-20 w-[37.625rem] mx-4 backdrop-blur-sm border rounded-xl border-zinc-400 bg-background
          sm:gap-4 sm:p-4 sm:max-h-fit
          md:p-8 md:h-[80%]
          lg:w-full
          xl:w-full'>

          <section className='flex flex-col sm:gap-2 2sm:gap-4'>
            <h1 className='text-lg text-center font-medium lg:text-2xl'>Subbscribe Newsletter</h1>
            <p className='text-sm text-center lg:text-lg'>Subbscribe to our email & get updates right  your inbox</p>
          </section>

          <CustomForm />

          <div className='flex h-full items-center justify-between 2xl:mt-36'>
            <p className='text-xs'>Developed by <strong>Caio Freire</strong></p>
            <a href='https://github.com/devCaioFreire' target='_blank' className='text-xs'>Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}