import React from 'react';
import { Box, Grid, Typography, Button, makeStyles} from "@material-ui/core"
import { differenceInMinutes } from "date-fns";

const skills = ["JavaScript", "React.js", "Node.js" ];

const useStyles =  makeStyles((theme) => ({
    
        wrapper: {
            border: "1px solid #e8e8e8",
            cursor: "pointer",
            transition: ".3s",
            "&:hover": {
                boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
                borderLeft: "6px solid #8d18e1"
            }
        },
        companyName: {
            fontSize: "13.5px",
            padding: theme.spacing(0.75),
            backgroundColor: theme.palette.primary.main,
            borderRadius: "5px",
            fontWeight: 600,
            display: "inline-block",
            color: "#fff"
        },
        skillChip: {
            margin: theme.spacing(0.5),
            padding: theme.spacing(0.75),
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "5px",
            color: "#fff",
            fontSize: "14.5px",
            fontWeight: 600,
            transition: ".3s",
            cursor: "pointer",
            height: "35px"
            
        }
}))

export default (props) => {
    const classes = useStyles();
    return(
        <Box p={2} className={classes.wrapper}>
            <Grid container>
                <Grid item xs>
                    <Typography variant="subtitle1">{props.title}</Typography>
                    <Typography className={classes.companyName} variant="subtitle2">{props.companyName}</Typography>
                </Grid>
                <Grid item container xs  >
                    {props.skills.map((skill) => ( 
                        <Grid key={skill} className={classes.skillChip}  item>
                            {skill}
                        </Grid>
                    ))}
                </Grid>
                <Grid item container xs direction="column" alignItems="flex-end">
                    <Grid item>
                        <Typography variant="caption">
                            {differenceInMinutes(Date.now(), props.postedOn) } min ago |{" "} {props.type} | {props.location}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box mt={2}>
                            <Button 
                            onClick={props.open}
                            variant="outlined"
                            >
                                Check
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}