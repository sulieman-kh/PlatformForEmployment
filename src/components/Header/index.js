import React from "react";
import {Box, Button, Grid, Typography } from '@material-ui/core';
import NewJobModal from "../Job/NewJobModal";

const index = (props) => (
    <Box py={10} bgcolor="secondary.main" color="white">
        <Grid container justify="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography
                        variant="h5">
                            Platform for Employment
                    </Typography>
                    <Button 
                    onClick={props.openNewJobModal} 
                    variant="contained" 
                    color="primary"
                    disableElevation
                    >
                        Post a job
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
)
export default index;