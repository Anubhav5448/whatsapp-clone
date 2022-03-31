import { Chat, MoreVert, Search } from '@mui/icons-material';
import { Avatar, Button, IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import * as EmailValidator from "email-validator";

function Sidebar() {

    const createChat = () => {
        const input = prompt("Please Enter an email address for the user you wish to chat with");
        if (!input) return null;

        if (EmailValidator.validate(input)) {
            // We need to add chat into db 'chats' collection
        }


    }
    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconContainer>

                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>


                </IconContainer>
            </Header>

            <SearchContainer>
                <Search />
                <SearchInput placeholder='Search in chats' />
            </SearchContainer>

            <SidebarButton onClick={createChat}>Start new chat</SidebarButton>

                {/* List of chats */}

                


        </Container>
    );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
background-color: white;
z-index: 1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;

const SidebarButton = styled(Button)`
width: 100%;

&&&{
border-bottom: 1px solid whitesmoke;
border-top: 1px solid whitesmoke;
}
`;



const SearchContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 20px;
`;
const SearchInput = styled.input`
outline-width:0;
border: none;
flex: 1;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;
:hover{
    opacity: 0.8;
}
`;
const IconContainer = styled.div``;


