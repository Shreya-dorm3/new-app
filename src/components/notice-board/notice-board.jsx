import React, { useState } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import './notice-board.css'

export default function NoticeBoard() {

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="h-100 m-0 row">
                {/* <Box sx={{ bgcolor: '#cfe8fc' }} > */}
                <div className="col-md-7 d-none d-sm-flex">
                    <img className="img-background" style={{ height: '100%' }} src={"../images/notice.png"}></img>
                </div>
                <div className="col-md-5 d-flex justify-content-center flex-column">
                    <div className="text-end">
                        <VisibilityOutlinedIcon style={{ color: '#fff' }}></VisibilityOutlinedIcon>
                    </div>
                    <div className="text-end">
                        <div className="headline-text">Watch what the whales are watching!</div>
                        <div className="text-muted">All whales are equal. Know exactly what the whales are impacting YOUR portfolio doing</div>
                    </div>
                </div>
                {/* </Box> */}
            </div>
        </React.Fragment>
    );
}