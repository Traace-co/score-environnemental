import { Layout } from 'antd';
import './App.less';
import { Landing } from './Landing';
import { navigationBackgroundColor, textColor } from './design/colors';
import { NavFooter } from './navigation/NavFooter';
import { NavHeader } from './navigation/NavHeader';

function App() {
  const { Content, Footer } = Layout;
  return (
    <div className="App">
      <Layout className='min-h-screen'>
        <div
          className='p-4 sm:p-8'
          style={{ backgroundColor: navigationBackgroundColor }}>
          <NavHeader />
        </div>
        <Content style={{ color: textColor }}>
          <div className='container mx-auto py-8 px-4 sm:px-24'>
            <Landing />
          </div>
        </Content>
        <Footer style={{ backgroundColor: navigationBackgroundColor }}>
          <NavFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
