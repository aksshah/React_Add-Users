import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';
import {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUsers  = (props) => {

    const [enteredUser,setEnteredUser] = useState(''); 
    const [enteredAge,setEnteredAge] = useState(''); 
    const [error,setError] = useState(''); 

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredAge.trim().length === 0 || enteredUser.trim().length === 0){
            setError({
                title:'Invalid input',
                message: 'Please enter valid values (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'Invalid input',
                message: 'Please enter valid age (>0).'
            });
            return;
        }
        setEnteredUser('');
        setEnteredAge('');
        props.onAddUser(enteredUser,enteredAge)
    }

    const userNameChangedHandler = (event) => {
        setEnteredUser(event.target.value);
    }

    const userAgeChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }


    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type='text' onChange={userNameChangedHandler} value={enteredUser}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type='number' onChange={userAgeChangedHandler} value={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUsers;