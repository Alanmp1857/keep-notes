// DisplayNotes.tsx
import React, { useState } from 'react';
import { updateNotes, deleteNotes } from '../../../services/noteService';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const DisplayNotes = (props: any) => {
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);

    const updatesNotes = useFormik({
        initialValues: {
            title: '',
            note: '',
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log(values);
                await updateNotes(id, values);
                alert('Updated Successfully');
                setOpen(false);
                resetForm({ values: { title: '', note: '' } });
            } catch (err) {
                console.error(err);
                alert('Error updating notes');
            }
        },
    });


    const deleteNote = (id: number) => {
        deleteNotes(id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const editNote = (id: number) => {
        setId(id);
        setOpen(true);
        const selectedNote = props.noteList.find((note: any) => note.id === id);
        if (selectedNote) {
            updatesNotes.setValues(selectedNote);
        }
    };

    const displayElem = props.noteList.map((ele: any) => (
        <React.Fragment key={ele.id}>
            <Card sx={{ backgroundColor: "#fff700" }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {ele.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" component="div">
                        {ele.note}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => editNote(ele.id)} sx={{ backgroundColor: "orange", color: "white" }}>
                        Edit
                    </Button>
                    <Button size="small" onClick={() => deleteNote(ele.id)} sx={{ backgroundColor: "orange", color: "white" }}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    ));

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Display Notes</h2>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, padding: '1em', backgroundColor: '#ffdf00', margin: "20px", borderRadius: "10px" }}>
                {displayElem}
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <form onSubmit={(e) => { e.preventDefault(); updatesNotes.handleSubmit(e); }}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Edit the Notes</DialogContentText>
                        <TextField
                            autoFocus
                            name="title"
                            margin="dense"
                            id="title"
                            label="title"
                            type="text"
                            fullWidth
                            value={updatesNotes.values.title}
                            variant="standard"
                            onChange={updatesNotes.handleChange}
                        />
                        <TextField
                            autoFocus
                            name="note"
                            margin="dense"
                            id="note"
                            label="note"
                            type="text"
                            fullWidth
                            value={updatesNotes.values.note}
                            variant="standard"
                            onChange={updatesNotes.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit">Update</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default DisplayNotes;
