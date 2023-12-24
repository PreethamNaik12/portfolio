import { Container } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextField, Button, Select, MenuItem } from '@mui/material';


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <Container maxWidth="sm" sx={{ p: 3 }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid' }}>
                <TextField
                    {...register('name', { required: true, minLength: 10 })}
                    label="Name"
                    error={errors.name ? true : false}
                    helperText={
                        errors.name
                            ? 'First name is required and must be at least 10 characters long'
                            : ''
                    }
                    sx={{ p: 2, label: { color: 'primary.main', p: 2 } }}
                    variant="filled" // Change the variant to "outlined"
                />

                <TextField
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    label="Email"
                    error={errors.email ? true : false}
                    helperText={
                        errors.email
                            ? 'Email is required and must be a valid email address'
                            : ''
                    }
                    sx={{ p: 2, label: { color: 'primary.main', p: 2 } }}
                    variant="filled" // Change the variant to "outlined"
                />

                <TextField
                    {...register('phoneNumber', { required: true, pattern: /^\d{10}$/ })}
                    label="Phone Number"
                    error={errors.phoneNumber ? true : false}
                    helperText={
                        errors.phoneNumber
                            ? 'Phone number is required and must be a 10-digit number'
                            : ''
                    }
                    sx={{ p: 2, label: { color: 'primary.main', p: 2 } }}
                    variant="filled" // Change the variant to "outlined"
                />

                <Select
                    {...register('gender')}
                    sx={{ m: 2,label: { color: 'primary.main' } }}
                    variant="filled"
                    label="Age"
                >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </Select>

                <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }}>
                    Submit
                </Button>
            </form>
        </Container >
    );
};

export default Contact;
