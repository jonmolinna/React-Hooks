import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
//import db, { auth } from './firebase';

import axios from './axios';
import Pusher from 'pusher-js';

const pusher = new Pusher('5354e85537ec2bfe4703', {
    cluster: 'us2'
});

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    const getChats = () => {
        axios.get('/get/conversationList')
            .then(res => {
                setChats(res.data)
            })
    };

    useEffect(() => {
        getChats();

        const channel = pusher.subscribe('chats');
        channel.bind('newChat', function(data){
            getChats();
        });
    }, []);

    const addChat = (e) => {
        e.preventDefault();
        
        const chatName = prompt('Please enter a chat name');
        const firstMsg = prompt('Plase send a welcome message');

        if(chatName && firstMsg){
            let chatId = ''

            axios
                .get('/new/conversation', {
                    chatName: chatName
                })
                .then(res => {
                    chatId = res.data._id
                })
                .then(() => {
                    axios.post(`/new/message?id=${chatId}`, {
                        message: firstMsg,
                        timestamp: Date.now(),
                        user: user
                    })
                }
            )
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar 
                    className="sidebar__avatar"
                    src={user.photo}
                    // onClick={() => auth.signOut()}
                />
                <div className="sidebar__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar__inputButton">
                    <RateReviewOutlinedIcon onClick={addChat} />
                </IconButton>
            </div>

            <div className="sidebar__chats">
                {
                    chats.map(({ id, name, timestamp }) => (
                        <SidebarChat 
                            key={id} 
                            id={id} 
                            chatName={name}
                            timestamp={timestamp} 
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default Sidebar
