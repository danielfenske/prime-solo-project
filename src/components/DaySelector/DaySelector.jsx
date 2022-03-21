// MUI imports
import { MenuItem } from '@mui/material';

function DaySelector({daysPerWeek}) {

    switch (daysPerWeek) {
        case 1:
            return (
                <>
                    <MenuItem value="1">1</MenuItem>
                </>
            )
        case 2:
            return (
                <>
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='2'>2</MenuItem>
                </>
            )
        case 3:
            return (
                <>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                </>
            )
        case 4:
            return (
                <>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                </>
            )
        default:
            return (
                <MenuItem value="1">1</MenuItem>
            )
    }
}

export default DaySelector;