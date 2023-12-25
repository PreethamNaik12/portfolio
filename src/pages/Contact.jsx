import { Container, Button, TextField, Grid, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../components';

const Contact = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (data, e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: data.name,
                message: data.message,
                from_email: data.email,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            // TODO: Add a toast notification
            reset();
            navigate('/home');
        }).catch(() => {
            setIsLoading(false);
            //TODO: Add a toast notification
        })

        console.log(data);
        setIsLoading(false);
        reset();
    };

    const handleBlur = () => { };
    const handleFocus = () => { };



    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => <TextField label="Name" fullWidth {...field} error={!!errors.name} helperText={errors.name?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                }
                            }}
                            render={({ field }) => <TextField label="Email" fullWidth {...field} error={!!errors.email} helperText={errors.email?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="message"
                            control={control}
                            rules={{ required: 'Message is required' }}
                            render={({ field }) => <TextField label="Message" multiline rows={4} fullWidth {...field} error={!!errors.message} helperText={errors.message?.message} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Submit'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Toast />
        </Container>
    );
};

export default Contact;