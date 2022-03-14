import React from 'react'
import './SwipeButtonsStyle.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material'; 

const SwipeButtons = () => {
  return (
    <div className='swipe-buttons'>
        <IconButton className = 'swipeButtons_repeat' >
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className = 'swipeButtons_left' >
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className = 'swipeButtons_star' >
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className = 'swipeButtons_right' >
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className = 'swipeButtons_lightning' >
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons