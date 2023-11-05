"use client";
import "@/app/globals.css";

import Link from "next/link";

import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Message, User } from "@/assets/icons";

const DRAWER_WIDTH = 129;

const LINKS = [
  { text: "messagers", href: "/", icon: Message },
  { text: "users", href: "/users", icon: User },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <html lang="en">
      <body>
        <Box display="flex">
          <Box
            width={DRAWER_WIDTH}
            display="flex"
            flexDirection="column"
            bgcolor="#F0F4FA"
            alignItems="center"
            height="100vh"
          >
            <Box
              component={Link}
              href="/"
              position="relative"
              marginX="auto"
              marginTop="27px"
              width={75}
              height={75}
            >
              <Box component="img" src="/images/tdc-logo.png" alt="tdc logo" />
            </Box>
            <Stack
              marginTop="10px"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {LINKS.map(({ text, href, icon: Icon }) => (
                <Button
                  key={text}
                  // variant="contained"
                  LinkComponent={Link}
                  href={href}
                  sx={{
                    p: 0,
                    minWidth: "48px",
                    minHeight: "48px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                    color: "black",
                  }}
                >
                  <Icon />
                </Button>
              ))}
            </Stack>
            <Box marginTop="auto" marginBottom="50px">
              <IconButton onClick={handleClick}>
                <Avatar
                  src="/images/Ellipse 1.png"
                  alt="avatar"
                  sx={{
                    minWidth: "48px",
                    minHeight: "48px",
                  }}
                />
              </IconButton>
              <div>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <Typography
                    textAlign="center"
                    fontWeight="bolder"
                    sx={{ userSelect: "none" }}
                  >
                    ahihi
                  </Typography>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </Box>
          </Box>
          <Box
            component="main"
            flex={1}
            sx={{
              bgcolor: "white",
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
