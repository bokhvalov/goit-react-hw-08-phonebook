import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { TextField, Typography } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div>
      <Typography component="p" variant="h5" sx={{ marginTop: 3}}>
        Find contacts by name
      </Typography>
      <TextField
        fullWidth
        id="ContactName"
        type="text"
        label="Contact Name"
        name="name"
        onChange={handleFilter}
        sx={{ marginTop: 1, maxWidth: 350 }}
      />
    </div>
  );
};
