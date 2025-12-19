import { useState } from 'react'
import { RouterConfig } from './router/routerConfig'
import { Box, useMediaQuery } from '@mui/material'
import TopBar from './app/TopBar'
import LeftBar from './app/LeftBar'
import Footer from './app/footer'

function App() {

  return (
    <>
      <Layout>
        <RouterConfig />
      </Layout>
    </>
  )
}

const Layout = ({ children }) => {
  const drawerWidth = 320;
  const isMobile = useMediaQuery('(min-width:1080px)');
  const [mobileOpen, setMobileOpen] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TopBar
        onMenuClick={handleDrawerToggle}
        isMobile={isMobile}
      />
      <LeftBar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={(theme) => ({
          minHeight: '100vh',
          flexGrow: 1,
          paddingTop: '64px',
        })}>
        {children}
      </Box>
      <Footer />
    </Box>

  )
}

export default App
