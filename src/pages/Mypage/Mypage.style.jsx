import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdNavigateNext } from 'react-icons/md';
import { FaMapPin } from 'react-icons/fa';

export const MypageSection = styled.div`
    display: flex;
    width: 100%;
    padding: 100px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const MypageFrame = styled.div`
    display: flex;
    width: 996px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Text-size-6, 20px);
`;

export const TopFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    align-self: stretch;
`;

export const BottomFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
`;

export const NicknameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: var(--Spacing-4, 16px);
    color: var(--Color-Text-primary, #222);

    /* T1_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-10, 32px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.64px;
`;

export const RecentorderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-3, 8px);
    align-self: stretch;
`;

export const DesignedIcons = styled(IoSettingsOutline)`
    width: var(--Text-size-9, 28px);
    height: var(--Text-size-9, 28px);
`;

export const RecentFrame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    color: var(--Color-Text-primary, #222);

    /* T3_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-8, 24px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
    letter-spacing: -0.48px;
`;

export const Line = styled.div`
    width: 996px;
    height: 1px;
    background: var(--Color-Text-primary, #222);
`;

export const MoreButton = styled.div`
    display: flex;
    align-items: center;
    color: var(--Color-Text-secondary, #616161);

    /* B5_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

export const DesignedIcons2 = styled(MdNavigateNext)`
    width: var(--Text-size-6, 20px);
    height: var(--Text-size-6, 20px);
`;

export const OrderContainer = styled.div`
    display: flex;
    width: 996px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-3, 8px);
`;

export const OrderFrame = styled.div`
    display: flex;
    align-items: flex-start;
    gap: var(--Spacing-1, 4px);
    align-self: stretch;
    color: var(--Color-Text-secondary, #616161);

    /* Num/S_M */
    font-family: Montserrat;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const DesignedIcons3 = styled(FaMapPin)`
    display: flex;
    width: 14.4px;
    height: 18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -0.72px;
    flex-shrink: 0;
    color: #ff8162;
`;

export const ProductFrame = styled.div`
    display: flex;
    align-items: flex-start;
    gap: var(--Spacing-5, 24px);
`;

export const Img = styled.div`
    width: 180px;
    height: 180px;
    background-color: #d9d9d9;
`;

export const DetailFrame = styled.div`
    display: flex;
    width: 588px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    color: var(--Color-Text-primary, #222);

    /* B4_M */
    font-family: Pretendard;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
`;

export const DetailFrame2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-2, 6px);
    align-self: stretch;
    color: var(--Color-Text-primary, #222);

    /* ST3_SB */
    font-family: Pretendard;
    font-size: var(--Text-size-6, 20px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;

export const DetailFrame3 = styled.div`
    display: flex;
    width: 588px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    color: var(--Color-Text-secondary, #616161);

    /* B7_R */
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

export const Option = styled.div`
    display: flex;
    align-items: center;
    gap: var(--Spacing-3, 8px);
    align-self: stretch;
    color: var(--Color-Text-secondary, #616161);

    /* B7_R */
    font-family: Pretendard;
    font-size: var(--Text-size-3, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
`;

export const Price = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1px;
    color: var(--Color-Text-primary, #222);
    font-family: Montserrat;
    font-size: var(--Text-size-4, 16px);
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
`;

export const Line2 = styled.div`
    width: var(--Text-size-2, 1px);
    height: 12px;
    background: var(--Color-Text-secondary, #616161);
`;

export const ReviewButton = styled.button`
    display: flex;
    width: 105px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background: var(--Color-Main-primary, #65bd83);
    color: #fff;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
`;
