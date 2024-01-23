import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Users from '../../models/users';
import { addUsers } from '../../services/registerService';

const registerSchema = yup.object({
    username: yup.string().min(2, "Too short!").max(20, "Too Long").required("This field is Required!"),
    email: yup.string().email("Invalid email").min(5, "Too short!").max(40, "Too Long").required("Email is Required!"),
    password: yup.string().min(6, "Too short!").max(40, "Too Long").required("Required")
});

const Register = () => {
    const newUsers = useFormik({
        initialValues: {
            username: "",
            gender: "",
            email: "",
            password: "",
        },
        validationSchema: registerSchema,
        onSubmit: (values: Users, { resetForm }) => {
            addUsers(values)
                .then((res: any) => {
                    if (res.status === 201) {
                        alert('Success');
                    } else {
                        alert('Something Went Wrong');
                    }
                })
                .catch((err) => {
                    alert(err);
                });
            resetForm({
                values: {
                    username: "",
                    gender: "",
                    email: "",
                    password: "",
                }
            });
        },
    });

    return (
        <Box
            component="form"
            sx={{
                border: '1px grey',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffdf00',
                borderRadius: "10px",
                padding: "10px",
                margin: "100px 100px 80px 100px"
            }}
            autoComplete="off"
            onSubmit={newUsers.handleSubmit}
        >
            <h1 style={{ textAlign: "center" }}>Register page</h1>
            {/* firstname */}
            <TextField id="outlined-basic" helperText={newUsers.errors.username} value={newUsers.values.username} name='username' label="Username" variant="outlined" onChange={newUsers.handleChange} sx={{ margin: "10px" }} />

            {newUsers.touched.username || newUsers.dirty ? (<div><p>{newUsers.errors.username}</p></div>) : (<></>)}

            {/* gender */}
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={newUsers.values.gender}
                name="gender"
                onChange={newUsers.handleChange}
            >
                <div style={{ display: "flex" }}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </div>
            </RadioGroup>

            {/* email */}
            <TextField id="outlined-basic" helperText={newUsers.errors.email} value={newUsers.values.email} name='email' label="Email" variant="outlined" onChange={newUsers.handleChange} sx={{ margin: "10px" }} />

            {/* lastname */}
            <TextField id="outlined-basic" helperText={newUsers.errors.password} value={newUsers.values.password} name='password' type='password' label="Password" variant="outlined" onChange={newUsers.handleChange} sx={{ margin: "10px" }} />

            <Button sx={{ margin: 1, backgroundColor: "orange", color: "white" }} type='submit'>
                Register
            </Button>

            <Typography>
                Already have an account ? <Link to="/login">Login</Link>
            </Typography>
        </Box>
    );
};

export default Register;