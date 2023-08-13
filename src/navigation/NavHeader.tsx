import { useEffect } from "react"
import githubLogo from './github-64.png'

export function NavHeader() {

  useEffect(() => {
    document.title = 'Score environnemental voiture électrique'
  })

  return <div className="flex flex-row w-full items-center gap-4">
    <div className='text-white'  >
      SCORE ENVIRONNEMENTAL DES VOITURES ÉLECTRIQUES
    </div>
    <div className="flex-grow" />
    <a
      target='_blank' href='https://github.com/Traace-co/score-environnemental' className="h-1/2 text-white/[0.65] hover:text-white" rel="noreferrer" >
      <div className='flex flex-row gap-2 items-center shrink-0'>
        <span className='hidden sm:block'>View on GitHub</span>
        <div className='block sm:hidden'/>
        <img src={githubLogo} alt='View on GitHub' style={{ width: '32px', height: '32px' }} />
      </div>
    </a>
  </div>
}