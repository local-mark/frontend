import { useNavigate } from 'react-router-dom';
import {
    DesignedIcons,
    DownFrame,
    FormFrame,
    Img,
    RegistFrame,
    RegistSection,
    FormContainer,
    InputField,
    TextLayer,
    RequestButton,
    ButtonFrame,
    Button,
    StateLayer,
} from './BrandRegist.style';

export default function BrandRegist() {
    const navigate = useNavigate();
    return (
        <div>
            <RegistSection>
                <RegistFrame>
                    <div>내 브랜드 등록</div>
                    <DownFrame>
                        <Img onClick={() => {}}>
                            <DesignedIcons></DesignedIcons>
                        </Img>
                        <FormFrame>
                            <FormContainer>
                                <h1>브랜드명</h1>
                                <InputField>
                                    <TextLayer></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>활동 지역 선택</h1>
                                <InputField>
                                    <TextLayer></TextLayer>
                                    <RequestButton>지역 찾기</RequestButton>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <div className="title-wrapper">
                                    <h1>브랜드 카테고리</h1>
                                    <h2>(최대 3개까지 선택 가능)</h2>
                                </div>
                                <InputField>
                                    <TextLayer></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <div className="title-wrapper">
                                    <h1>브랜드 URL</h1>
                                    <h2>(인스타그램, 자사몰 홈페이지 등)</h2>
                                </div>
                                <InputField>
                                    <TextLayer></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>브랜드 및 상품 소개</h1>
                                <InputField style={{ height: '320px' }}>
                                    <TextLayer></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>사업자명</h1>
                                <InputField>
                                    <TextLayer></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>사업자 등록 번호</h1>
                                <InputField>
                                    <TextLayer></TextLayer>
                                    <RequestButton>인증요청</RequestButton>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>담당자 연락처</h1>
                                <InputField>
                                    <TextLayer placeholder="전화번호 입력"></TextLayer>
                                </InputField>
                                <InputField>
                                    <TextLayer placeholder="이메일 입력"></TextLayer>
                                </InputField>
                            </FormContainer>
                        </FormFrame>
                        <ButtonFrame>
                            <Button>
                                <StateLayer
                                    onClick={() => {
                                        navigate('/');
                                    }}
                                >
                                    다음에 신청하기
                                </StateLayer>
                            </Button>
                            <Button style={{ backgroundColor: '#65BD83' }}>
                                <StateLayer style={{ color: '#FFF' }}>브랜드 신청하기</StateLayer>
                            </Button>
                        </ButtonFrame>
                    </DownFrame>
                </RegistFrame>
            </RegistSection>
        </div>
    );
}
