import React from 'react';
import './Sidebar.css';
import { BookmarkBorder, Explore, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Twitter } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Twitter className='sidebar_twitterIcon'/>

        <SidebarOption Icon={Home} text="Home"/>
        <SidebarOption Icon={Explore} text="Explore"/>
        <SidebarOption Icon={NotificationsNone} text="Notifications"/>
        <SidebarOption Icon={MailOutline} text="Messages"/>
        <SidebarOption Icon={BookmarkBorder} text="Booksmarks"/>
        <SidebarOption Icon={ListAlt} text="Lists"/>
        <SidebarOption Icon={PermIdentity} text="Profile"/>
        <SidebarOption Icon={MoreHoriz} text="More"/>

        <Button variant="outlined" className='sidebar_tweet' fullWidth>Tweet
        </Button>
    </div>
  );
}

export default Sidebar