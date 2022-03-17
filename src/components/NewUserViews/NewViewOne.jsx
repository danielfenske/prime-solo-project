import TextField from '@mui/material/TextField';

function NewViewOne () {
    return (
        <div className="appContainer">
            <div className="progressBar"></div>

            <h1 className="headerText">Tell us a little more about you.</h1>

            <TextField id="outlined-search" label="Search field" type="search" />
        </div>
    )
}

export default NewViewOne;