import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LetterTitleContainer = styled.div``;

const LetterTitleBackground = styled.img``;

const LetterTitle = styled.div``;

const LetterDate = styled.div``;

const LetterContentContainer = styled.div``;


const LetterDetail = ({letters}) => {
    const { id } = useParams();
    const letter = letters.find(letter => letter.letter_id === parseInt(id));

    if (!letter) {
        return <p>Local Letter not found.</p>
    }

    return (
        <div>
            <LetterTitleContainer>
                <LetterTitleBackground></LetterTitleBackground>
                <LetterTitle>{letter.title}</LetterTitle>
                <LetterDate>{letter.created_at}</LetterDate>
            </LetterTitleContainer>
            <LetterContentContainer></LetterContentContainer>
        </div>
    );
};

export default LetterDetail;
