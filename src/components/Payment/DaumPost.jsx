import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'; // Import the FaTimes icon from react-icons

const DaumPostBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
`;

const DaumPostContainer = styled.div`
    width: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export default function DaumPost({ address, setAddress, handleComplete }) {
    const complete = (data) => {
        let fullAddress = data.address;
        let zonecode = data.zonecode;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${extraAddress}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setAddress({
            ...address,
            address: fullAddress,
            zonecode: zonecode,
        });

        handleComplete();
    };

    return (
        <DaumPostBackground>
            <DaumPostContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 style={{ color: '#fff', height: '50px', width: '500px' }}>주소 검색</h1>
                    <FaTimes onClick={handleComplete} style={{ cursor: 'pointer', color: '#fff' }} />
                </div>
                <DaumPostcode autoClose style={{ height: '500px', width: '500px' }} onComplete={complete} />
            </DaumPostContainer>
        </DaumPostBackground>
    );
}
