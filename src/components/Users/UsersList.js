import Card from '../UI/Card'
import classes from './UsersList.module.css';

const UsersList = (props) => {
    if(props.users.length !== 0){
        return(
            <Card className={classes.users}>
                <ul>
                    {props.users.map(user => (
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    ))}
                </ul>
            </Card>
        );
    }else{
        return <div></div>;
    }
  
}

export default UsersList;