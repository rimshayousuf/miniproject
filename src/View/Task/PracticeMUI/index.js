import React, { useState } from 'react';
import { Delete, Favorite, FavoriteBorder } from '@material-ui/icons';
import { Button, ButtonGroup, Checkbox, Radio } from '@mui/material';

//MUI component
const MUI = () => {
    //customMe function
    const [color, setColor] = useState('primary');
    const [disableBtn, setdisablebtn] = useState(false);

    //getValue function
    const [name, setName] = useState([])

    //testGender function
    const [gender, getGender] = useState('male')

    function customMe() {
        setColor("secondary")
        setdisablebtn(true)
    }
    function getValue(e) {
        // assigning the list to temp variable
        const temp = [...name];
        // adding the element using push
        temp.push(e.target.value);
        // updating the list
        setName(temp);
        //display updated list
        console.log(temp);
    }
    function testGender(e) {
         console.log(e.target.value)
        getGender(e.target.value)
    }

    return (
        <div className='MUI'>
            <h1>Material UI Buttons</h1>
            <Button
                color={color}
                variant='contained'
                disabled={disableBtn}
                onClick={() => { customMe() }}
                endIcon={<Delete />}
            >Click Me
            </Button>
            <br /> <br />

            <ButtonGroup aria-label="medium success button group"
                orientation='horizontal'
                variant="contained"
                color="success" >
                <Button>Home</Button>
                <Button>Service</Button>
                <Button>About</Button>
                <Button>Contact</Button>
            </ButtonGroup>
            <br /> <br />

            <Checkbox
                color='primary'
                value="rimsha"
                onChange={(e) => { getValue(e) }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite color='secondary' />} />

            <Checkbox color='secondary' value="rafay"
                defaultChecked
                onChange={(e) => { getValue(e) }} />

            <Checkbox color='secondary' value="faiz"
                defaultChecked
                onChange={(e) => { getValue(e) }} />

            <Checkbox color='secondary' value="ramsha"
                defaultChecked
                onChange={(e) => { getValue(e) }} />

            <Checkbox color='secondary' value="ahmed"
                defaultChecked
                indeterminate onChange={(e) => { getValue(e) }} />
            <br />
            <div>
                <span>Male</span>
                <Radio value='male'
                    color='success'
                    checked={gender === 'male'}
                    onChange={ testGender }
                />
                <span>Female</span>
                <Radio value='female'
                    color='default'
                    checked={gender === 'female'}
                    onChange={ testGender }
                />
            </div>
        </div>
    )

}
export default MUI;