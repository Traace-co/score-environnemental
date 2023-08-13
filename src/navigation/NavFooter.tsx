import { Divider } from 'antd'
import logoFooter from './logo_footer.png'

function NavLink(props: { url: string, title: string }) {
  const { url, title } = props
  return <a href={url} target='_blank' rel="noreferrer">
    {title}
  </a>
}

export function NavFooter() {
  return <div className="flex flex-col gap-2 items-center justify-center mb-2 text-white">
    <div className="flex flex-row gap-1 items-center mb-4">
      <NavLink url={process.env.PUBLIC_URL} title='SCORE ENVIRONNEMENTAL' />
      <Divider type='vertical' orientation='center' />
      <NavLink url="https://evfootprint.org" title="EV FOOTPRINT" />
    </div>
    <div className='text-sm'>
      Built with 💚 by
    </div>
    <div style={{ height: '26px' }}>
      <a href='https://traace.co' target='_blank' rel="noreferrer">
        <img src={logoFooter} alt='Traace logo' className="h-full" />
      </a>
    </div>
  </div >
}