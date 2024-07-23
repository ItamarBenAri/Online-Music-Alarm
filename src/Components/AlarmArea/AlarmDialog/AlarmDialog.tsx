import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from "react-redux";
import { changeAlarm } from "../../../Redux/AppStore";
import AlarmModel from "../../../Models/AlarmModel";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { calculationsService } from "../../../Services/CalculationsService";

export function AlarmDialog(): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const [youtubeUrl, setYoutubeUrl] = React.useState('');
    const [timeToWakeUp, setTimeToWakeUp] = React.useState('');
    const [error, setError] = React.useState('');
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setError('');
    };

    const validateUrl = (url: string) => {
        const regex = /^(https:\/\/(?:www\.)?youtube\.com\/watch\?v=[\w-]+(&[\w-]+=[\w-]+)*|https:\/\/youtu\.be\/[\w-]+(\?[\w-]+=[\w-]+)*)$/;
        return regex.test(url);
    };

    const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYoutubeUrl(event.target.value);
    };

    const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimeToWakeUp(event.target.value);
    };

    const addAlarm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (validateUrl(youtubeUrl)) {
            setError('');
            const alarmData: AlarmModel = { youtubeUrl, timeToWakeUp };
            dispatch(changeAlarm(alarmData));
            handleClose();

            const timeUntilRing = calculationsService.hoursCalculation(timeToWakeUp);
            
            toast.success(`Ring in ${timeUntilRing}`, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            setError('Must be a valid YouTube URL');
        }
    };

    return (
        <div className="AlarmDialog">
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Set Alarm
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: addAlarm,
                    }}
                >
                    <DialogTitle>Alarm</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To set an alarm, please enter a valid YouTube URL and the time to wake up.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="youtubeUrl"
                            label="YouTube URL"
                            type="url"
                            fullWidth
                            required
                            variant="standard"
                            value={youtubeUrl}
                            onChange={handleChangeUrl}
                            error={Boolean(error)}
                            helperText={error}
                        />
                        <TextField
                            margin="dense"
                            name="timeToWakeUp"
                            label="Alarm Time"
                            type="time"
                            fullWidth
                            required
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            value={timeToWakeUp}
                            onChange={handleChangeTime}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Set Alarm</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
}
