import React from "react";
import ss from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={ss.dialog + ' ' + ss.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className={ss.dialog}>{props.message}</div>
};

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Emma'},
        {id: 3, name: 'James'},
        {id: 4, name: 'Olivia'},
        {id: 5, name: 'Noah'},
        {id: 6, name: 'Matthew'}
    ];
    let messages = [
        {id: 1, message: 'Hello bro'},
        {id: 2, message: 'What is your name?'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Where do you get your news?'},
        {id: 5, message: 'When you are old, what do you think children will ask you to tell stories about?'}
    ];
    let dialogElement = dialogs.map(item =>
        <DialogItem name={item.name} id={item.id}/>);
    let messageElement = messages.map(item => {
        return <Message message={item.message}/>
    });

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogsItems}>
                {dialogElement}
            </div>
            <div className={ss.messages}>
                {messageElement}
            </div>
        </div>
    )
};
export default Dialogs;
