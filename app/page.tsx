import NavBar from "@/app/components/NavBar";
import gradientbro from '../public/gradientblur.svg'
import Image from "next/image";
import TurnLife from "@/app/components/TurnLife";



export default function Home() {
  return (
      <div className={'w-full relative z-10  h-full min-h-screen bg-violet3'}>
          <div className={'relative'}>
              <NavBar/>
              <div className={'absolute right-0 -z-10 top-[-40vh]'}>
                  <Image className={'w-[400px] h-auto'} width={679} height={679} src={gradientbro} alt={''}/>
              </div>
          </div>
          <div>
              <TurnLife/>
          </div>
      </div>
  );
}
