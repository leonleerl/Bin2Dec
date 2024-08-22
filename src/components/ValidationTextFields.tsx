import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields(label: string, defaultValue: string, helperText: string) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField

          id="standard-error-helper-text"
          label="Binary"
          defaultValue=""
          helperText="length is more than 8"
          variant="standard"
        />
      </div>
    </Box>
  );
}