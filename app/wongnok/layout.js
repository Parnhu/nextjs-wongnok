import './wongnok.css'
import Link from 'next/link'
import { 
  AppBar, Box, Toolbar, Typography, Button, IconButton, Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Layout({
  children,
}) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: 'orange'}} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/wongnok" style={{ textDecoration: 'none', color: 'white' }}>
                    Wongnok App
                </Link>
              </Typography>
            
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        {children}
      </Container>
      <footer style={{ backgroundColor: 'orange', padding: '20px', textAlign: 'center', marginTop: '20px'}}>
        <Typography variant="body2" color="textSecondary">
          Contact Us: Wongnok@gmail.com | Phone: +123456789
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px'}}>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link> | 
          <Link href="https://www.wongnai.com/pages/privacy" style={{ textDecoration: 'none', color: 'white', marginLeft: '5px' }}>Terms of Service</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px'}}>
          &copy; {new Date().getFullYear()} Wongnok App. All rights reserved.
        </Typography>
      </footer>
    </>
  )
}
