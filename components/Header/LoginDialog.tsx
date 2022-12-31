import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import GoogleIcon from 'icons/google.svg'
import { useUser } from 'lib/Auth/useUser'

type Props = {
  open: boolean
}
const LoginDialog: React.FC<Props> = ({ open }) => {
  const [, auth] = useUser()
  return (
    <Dialog open>
      <DialogContent>
        <Stack>
          <Typography></Typography>
          <Button
            id="sign-in-with-google"
            variant="outlined"
            color="primary"
            onClick={auth.signInWithGoogle}
          >
            <Icon fontSize="small" sx={{ mr: 2 }}>
              <GoogleIcon />
            </Icon>
            Continue with Google
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
