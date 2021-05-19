import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const SelectInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#ededed',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#fff',
      boxShadow: '0 0 0 0.2rem #fff',
    },
  },
}))(InputBase);


export default function OrderBy() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="filled" hiddenLabel={true}>
        <Select
          native
          value={state.age}
          open={open}
          onChange={handleChange}
          input={<SelectInput />}
        >
          <option style={{backgroundColor: '#ededed'}} value={10}>Most Voted (Z  &#x2192; A)</option>
          <option style={{backgroundColor: '#ededed'}} value={20}>Less Voted (A  &#x2192; Z)</option>
        </Select>
      </FormControl>
    </div>
  );
}