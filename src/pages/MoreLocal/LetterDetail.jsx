import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LetterDetail = ({letters}) => {
    const { id } = useParams();
    const letter = letters.find(letter => letter.id === parseInt(id));

    return (

    );
};

export default LetterDetail;
