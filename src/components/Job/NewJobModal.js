import React, { useState } from 'react';
import { 
    Box, 
    Grid, 
    FilledInput, 
    Select, 
    MenuItem, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Typography,
    makeStyles,
    Button,
    IconButton,
    CircularProgress
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        borderRadius: "5px",
        fontSize: "14.5px",
        fontWeight: 600,
        cursor: "pointer",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: "#fff"
        } 
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff"
    }
}));

const initState = {
    title: "",
    type: "полный день",
    companyName: "",
    companyUrl: "",
    location: "Удаленная работа",
    link: "",
    description: "",
    skills: [],
}
const NewJobModal = (props) => {
    const [loading, setLoading] = useState(false);

    const [jobDetails, setJobDetails] = useState(initState);



    const handleChange = e => {
        e.persist();
        setJobDetails(oldState => ({ 
            ...oldState, 
            [e.target.name]: e.target.value 
        }))
    };

    const addRemoveSkill = skill => 
    jobDetails.skills.includes(skill)
    ? setJobDetails((oldState) => ({
        ...oldState,
        skills: oldState.skills.filter((s) => s !== skill),
    }))
    : setJobDetails((oldState) => ({
        ...oldState,
        skills: oldState.skills.concat(skill)
    }))
    
    const handleSubmit = async () => {
        for (const filed in jobDetails) {
            if(typeof jobDetails[filed] === "string" 
            && !jobDetails[filed]) 
            return;
        }
        if(!jobDetails.skills.length) return;
        setLoading(true)
        await props.postJob(jobDetails);
        closeModal();
    }

    const closeModal = () => {
        setJobDetails(initState);
        setLoading(false);
        props.closeModal();
    }
    const classes = useStyles();
    const skills = [
        "JavaScript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL"
    ];
    // console.log(jobDetails);
    return(
        <Dialog open={props.newJobModal} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Опубликовать вакансию
                    <IconButton onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput 
                        onChange={handleChange}
                        name="title"
                        value={jobDetails.title}
                        autoComplete="off"
                        placeholder="Job title *" 
                        disableUnderline 
                        fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <Select 
                        onChange={handleChange}
                        fullWidth
                        name="type"
                        value={jobDetails.type}
                        disableUnderline 
                        variant="filled" 
                        
                        >
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>                    
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="companyName"
                        value={jobDetails.companyName}
                        autoComplete="off"
                        fullWidth 
                        placeholder="Company name *" 
                        disableUnderline 
                        fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="companyUrl"
                        value={jobDetails.companyUrl}
                        autoComplete="off"
                        fullWidth 
                        placeholder="Company url *" 
                        disableUnderline 
                        fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Select 
                        onChange={handleChange}
                        name="location"
                        value={jobDetails.location}
                        fullWidth 
                        disableUnderline 
                        variant="filled"
                        >
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In office">In office</MenuItem>
                        </Select>                    
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="link"
                        value={jobDetails.link}
                        autoComplete="off"
                        fullWidth 
                        placeholder="Link *" 
                        disableUnderline 
                        fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                        onChange={handleChange}
                        name="description"
                        value={jobDetails.description}
                        autoComplete="off"
                        fullWidth 
                        multiline 
                        rows={4} 
                        placeholder="Description *" 
                        disableUnderline 
                        fullWidth />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills *</Typography>
                    <Box display="flex">
                        {skills.map((skill)=> 
                        <Box onClick={() => addRemoveSkill(skill)} 
                        className={`${classes.skillChip} ${
                            jobDetails.skills.includes(skill) && classes.included
                        }`}
                        key={skill}>
                            {skill}
                    </Box>
                    )}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" alignItems="center" width="100%" display="flex" justifyContent="space-between">
                    <Typography variant="caption">required fields *</Typography>
                    <Button 
                    onClick={handleSubmit}
                    variant="contained" 
                    disableElevation color="primary"
                    display={loading}
                    >
                        {loading ? (
                            <CircularProgress color="secondary" size={22} />
                        ) : (
                            "Post Job"
                        )}
                        
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}
export default NewJobModal;