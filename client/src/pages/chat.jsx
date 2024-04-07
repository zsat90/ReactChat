/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ChatContext } from "../context/chatContext";
import { AuthContext } from "../context/AuthContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chats/UserChat";
import PotentialChats from "../components/chats/PotentialChats";

const Chat = () => {

    const {user} = useContext(AuthContext)
    const {userChats, isUserChatsLoading, userChatError} = useContext(ChatContext)
    return ( 
    
    <Container>
        <PotentialChats />
        {userChats?.length < 1 ? null :
         <Stack direction="horizontal" gap={4} className="align-items-start">
            <Stack className="messages-box flex-grow-0 pe-3" gap={3}> 
                {isUserChatsLoading && <p>Loading Chats...</p>}
                {userChats?.map((chat, index) => {
                    return(
                        <div key={index}>
                            <UserChat chat= {chat} user={user}/>
                        </div>
                    )
                })}

            </Stack>
            <p>Chat Box</p>
        </Stack>
        }

    </Container> 
    
    );
}
 
export default Chat;