import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { showDrawer } from 'store/slices/drawer/drawer.slice'
import { NavMobileContainer, NavMobileItem } from 'components/layout/NavMobile/NavMobile.styles'
import HomeIcon from '@mui/icons-material/Home'
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
interface NavListItem {
  name: string,
  icon: React.ReactNode,
  to: string
}

function NavMobile() {
  const open = useAppSelector(state => state.drawer)
  const dispatch = useAppDispatch()

  const listItems: NavListItem[] = [
    { name: 'Home', icon: <HomeIcon />, to: '' },
    { name: 'Install', icon: <DownloadIcon />, to: 'install' },
    { name: 'About', icon: <InfoIcon/>, to: 'about' }
  ]

  return (
    <Drawer open={open}
            onClose={() => dispatch(showDrawer(false))} sx={{ zIndex: 1 }}
    >
      <Box component="div" style={{ height: '70px' }} />
      <NavMobileContainer>
        <List sx={{ p: 0 }}>
          {
            listItems.map((navItem, index) => {
              return (
                <ListItem key={`nav-item-${index}`} disablePadding onClick={() => dispatch(showDrawer(false))}>
                  <NavMobileItem to={`${navItem.to}`}>
                    <ListItemButton>
                      <ListItemIcon>
                        {navItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={navItem.name} />
                    </ListItemButton>
                  </NavMobileItem>
                </ListItem>
              )
            })
          }
        </List>
      </NavMobileContainer>
    </Drawer>
  )
}

export default NavMobile
