"use client"
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button, IconButton } from '@mui/material';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
          <Button onClick={()=>setOpen(true)}><MenuRoundedIcon className='link'/></Button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className='w-[40vw] h-[100vh] bg-[var(--black)] flex flex-col gap-4 p-6'>
            <div><Link href={"https://makemyweb.ai/en"} target='blank'>MakeMyWeb.</Link></div>
            <div><Link href={"/"}>Home</Link></div>
            <div><Link href={"/about"}>About</Link></div>
            <div><Link href={"/blogs"}>Blogs</Link></div>
            <ThemeSwitcher/>
            </div>
          </Drawer>
    </div>
  );
}