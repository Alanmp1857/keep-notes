import Button from '@mui/material/Button';
import { addNotes } from '../../../services/noteService';
import { useFormik } from 'formik';
import Notes from '../../../models/notes';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// schema to validate the Object
let NotesSchema = yup.object({
    title: yup.string().required("Field is Required").max(10),
    note: yup.string().required("note is required").min(8).max(200)
})

const AddNotes = () => {
    const newNotes = useFormik({
        initialValues: {
            title: "",
            note: ""
        },
        validationSchema: NotesSchema,
        onSubmit: (values: Notes, { resetForm }) => {
            addNotes(values).then((res) => {
                if (res.status === 201) {
                    alert('Success');
                }
                else {
                    alert('Something Went Wrong')
                }
            }).catch((err) => {
                alert(err);
            });
            resetForm(
                {
                    values: {
                        title: "",
                        note: ""
                    }
                }
            )
        },
    })

    return (
        <div>
            <Box
                component="form"
                sx={{ p: 2, border: '1px grey', padding: "2em", margin: '40px 20px', alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#ffdf00', borderRadius: "10px" }}
                noValidate
                autoComplete="off"
                onSubmit={newNotes.handleSubmit}
            >
                <h1>Add Notes</h1>
                <TextField helperText={newNotes.errors.title} sx={{ padding: '2 em', margin: 1, width: "30%" }} name='title' value={newNotes.values.title} id="" label="Title" variant="outlined" onChange={newNotes.handleChange} />

                {newNotes.touched.title || newNotes.dirty ? (<div><p>{newNotes.errors.title}</p></div>) : (<></>)}

                <TextField
                    id="outlined-multiline-static"
                    name='note'
                    sx={{ padding: '2 em', margin: 1, width: "60%" }}
                    label="Note"
                    multiline
                    rows={4}
                    value={newNotes.values.note}
                    onChange={newNotes.handleChange}
                />

                {newNotes.touched.note || newNotes.dirty ? (<div><p>{newNotes.errors.note}</p></div>) : (<></>)}

                <Button sx={{ margin: 1, backgroundColor: "orange", color: "white" }} type='submit'>Save Notes</Button>

            </Box>

        </div>
    )
}

export default AddNotes;
