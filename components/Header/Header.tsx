import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUser } from 'lib/Auth/useUser'
import Icon from '@mui/material/Icon'

type Props = {
  fixed?: boolean
}
const Header: React.FC<Props> = ({ fixed = false }) => {
  const router = useRouter()

  const [user, auth] = useUser()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    await auth.signOut()
    handleCloseUserMenu()
    router.push('/')
  }

  return (
    <>
      <AppBar color="inherit">
        <Toolbar variant="dense">
          <div style={{ flexGrow: 1 }} />
          {user ? (
            <>
              <IconButton onClick={handleOpenUserMenu}>
                <Icon baseClassName="fas" className="fa-user" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Stack
              direction="row"
              spacing={2}
              // Pre fetching user auth when user is undefined
              sx={{ display: user === undefined ? 'none' : 'block' }}
            >
              <Button variant="text" color="primary" onClick={() => router.push('login')}>
                Login
              </Button>
              <Button variant="contained" color="primary" onClick={() => router.push('/signup')}>
                Sign Up
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      {!fixed && <Toolbar variant="dense" />}
    </>
  )
}

export default Header
