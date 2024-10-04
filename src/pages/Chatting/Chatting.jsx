import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import {
    Chat,
    DesignedIcons,
    DesignedIconsText,
    OpponentFrame,
    SummarizeFrame,
    UserFrame,
    UserFrame2,
    IconWithText,
    TopFrame,
    ChattingSection,
    TopFrame2,
    DesignedIcons2,
    BottomFrame,
    ChattingFrame,
    ChatFrame,
    GroupFrame,
    ButtonFrame,
    ButtonLayer,
    ChatLayer,
    LettersLayer,
    ChatLayer2,
    BoxFrame,
    MsgFrame,
    TxtFrame,
} from './Chatting.style';

export default function Chatting() {
    const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    const roomId = 4; //api 문제로 임의 지정
    const senderId = localStorage.getItem('id');
    const receiverId = 179; //api 문제로 임의 지정

    const fetchMessages = async () => {
        try {
            const result = await axios.get(`https://umc.localmark.store/chatRooms/${roomId}/messages`);
            setMessages(result.data.result); // 서버에서 메시지 가져오기
        } catch (error) {
            console.log('메시지 불러오기 실패:', error.response || error.message);
        }
    };

    useEffect(() => {
        fetchMessages(); // 컴포넌트가 처음 렌더링될 때 메시지 가져오기

        const intervalId = setInterval(() => {
            fetchMessages(); // 5초마다 메시지 가져오기
        }, 1000);

        // 컴포넌트가 언마운트될 때 인터벌 정리
        return () => clearInterval(intervalId);
    }, []); // 빈 배열로 useEffect가 처음 렌더링될 때만 실행

    useEffect(() => {
        const newSocket = io('https://umc.localmark.store', { path: '/chat' });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Socket connected:', newSocket.id);
        });

        newSocket.on('disconnect', () => {
            console.log('Socket disconnected');
        });

        // 소켓에서 수신한 메시지를 처리
        newSocket.on('receiveMessage', (message) => {
            console.log('Message received:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            newSocket.disconnect();
            newSocket.close();
        };
    }, []);

    const handleSendMessage = () => {
        if (socket && text.trim()) {
            socket.emit('sendMessage', {
                roomId,
                userId: senderId,
                receiverId,
                message: text,
            });
            setText('');
        }
    };

    // Function to format timestamp
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? '오후' : '오전';
        const formattedHours = hours % 12 || 12; // convert 0-23 to 1-12
        return `${period} ${formattedHours}:${minutes}`;
    };

    return (
        <div>
            <ChattingSection>
                <OpponentFrame>
                    {item.map((a, i) => (
                        <UserFrame key={i}>
                            <UserFrame2>
                                <DesignedIcons />
                                <SummarizeFrame>
                                    <h1>닉네임</h1>
                                    <h2>내용 미리보기</h2>
                                </SummarizeFrame>
                                <IconWithText>
                                    <DesignedIcons style={{ fill: '#FFA58F', width: '35px', height: '35px' }} />
                                    <DesignedIconsText>1</DesignedIconsText>
                                </IconWithText>
                            </UserFrame2>
                        </UserFrame>
                    ))}
                </OpponentFrame>
                <ChattingFrame>
                    <TopFrame>
                        <TopFrame2>
                            <DesignedIcons />
                            <SummarizeFrame>
                                <h1 style={{ marginTop: '15px' }}>닉네임</h1>
                            </SummarizeFrame>
                        </TopFrame2>
                        <DesignedIcons2 />
                    </TopFrame>
                    <BottomFrame>
                        <GroupFrame>
                            {messages.map((a, i) =>
                                messages[i].sender_id == senderId ? (
                                    <MsgFrame key={i} style={{ justifyContent: 'right' }}>
                                        <h1 style={{ marginRight: '5.5px' }}>
                                            {formatTimestamp(messages[i].timestamp)}
                                        </h1>
                                        <BoxFrame>
                                            <TxtFrame
                                                style={{ background: '#BBE1C8', borderRadius: '100px 0px 37px 100px' }}
                                            >
                                                {messages[i].content}
                                            </TxtFrame>
                                        </BoxFrame>
                                        <DesignedIcons
                                            style={{ marginLeft: '24px', marginRight: '24px' }}
                                        ></DesignedIcons>
                                    </MsgFrame>
                                ) : (
                                    <MsgFrame key={i}>
                                        <DesignedIcons style={{ marginRight: '24px' }}></DesignedIcons>
                                        <BoxFrame>
                                            <TxtFrame>{messages[i].content}</TxtFrame>
                                        </BoxFrame>
                                        <h1>{formatTimestamp(messages[i].timestamp)}</h1>
                                    </MsgFrame>
                                )
                            )}
                        </GroupFrame>
                        <ChatFrame>
                            <Chat>
                                <ChatLayer
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="메시지를 입력하세요"
                                />
                                <ChatLayer2>
                                    <LettersLayer>{text.length}/1000</LettersLayer>
                                    <ButtonFrame onClick={handleSendMessage}>
                                        <ButtonLayer>전송</ButtonLayer>
                                    </ButtonFrame>
                                </ChatLayer2>
                            </Chat>
                        </ChatFrame>
                    </BottomFrame>
                </ChattingFrame>
            </ChattingSection>
        </div>
    );
}
