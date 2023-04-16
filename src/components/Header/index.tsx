import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, Tooltip } from '@mui/material';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import Language from '../Language/Language';
import useTranslation from '../../hooks/useTranslation';

export default function Header() {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color='secondary'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Guilherme Bolfe
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Tooltip title="GitHub">
                  <Link href="https://github.com/guilhermebolfe11/" target="_blank">
                    <FaGithub size="2rem" />
                  </Link>
                </Tooltip>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Tooltip title="LinkedIn">
                  <Link href="https://www.linkedin.com/in/guilherme-bolfe/" target="_blank">
                    <FaLinkedinIn size="2rem" />
                  </Link>
                </Tooltip>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Tooltip title={t("Header.Email")}>
                  <Link href="mailto:bolfeguilherme@gmail.com" target="_blank">
                    <MdMail size="2rem" />
                  </Link>
                </Tooltip>
              </MenuItem>

              <MenuItem >
                <Language />
              </MenuItem>

            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Guilherme Bolfe
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button sx={{ my: 2, display: 'block' }}>
              <Tooltip title="GitHub">
                <Link href="https://github.com/guilhermebolfe11/" target="_blank">
                  <FaGithub size="2rem" />
                </Link>
              </Tooltip>
            </Button>

            <Button sx={{ my: 2, display: 'block' }}>
              <Tooltip title="LinkedIn">
                <Link href="https://www.linkedin.com/in/guilherme-bolfe/" target="_blank">
                  <FaLinkedinIn size="2rem" />
                </Link>
              </Tooltip>
            </Button>

            <Button sx={{ my: 2, display: 'block' }}>
              <Tooltip title={t("Header.Email")}>
                <Link href="mailto:bolfeguilherme@gmail.com" target="_blank">
                  <MdMail size="2rem" />
                </Link>
              </Tooltip>
            </Button>
            
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Button sx={{ my: 2, display: 'block' }}>
              <Language />
            </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}