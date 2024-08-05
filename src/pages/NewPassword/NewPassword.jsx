import {
    Button,
    ButtonLayer,
    FormContainer,
    InputField,
    Input,
    NewpasswordContent,
    NewpasswordForm,
    NewpasswordFrame,
    NewpasswordPane,
    NewpasswordSection,
    NewpasswordWrapper,
    TextContainer,
} from './NewPassword.style';

import { Link } from 'react-router-dom';

export default function NewPassword() {
    return (
        <div>
            <NewpasswordSection>
                <NewpasswordContent>
                    <NewpasswordPane>
                        <NewpasswordFrame>
                            <NewpasswordWrapper>
                                <div>회원정보 수정</div>
                                <NewpasswordForm>
                                    <FormContainer>
                                        <TextContainer>
                                            <div className="h1">새 비밀번호</div>
                                            <div className="h2">새롭게 사용할 비밀번호를 입력해 주세요.</div>
                                        </TextContainer>
                                        <InputField>
                                            <Input></Input>
                                        </InputField>
                                    </FormContainer>
                                    <FormContainer>
                                        <TextContainer>
                                            <div className="h1">비밀번호 확인</div>
                                            <div className="h2">다시 한 번 입력해 주세요.</div>
                                        </TextContainer>
                                        <InputField>
                                            <Input></Input>
                                        </InputField>
                                    </FormContainer>
                                </NewpasswordForm>
                            </NewpasswordWrapper>
                            <Link to="/">
                                <Button>
                                    <ButtonLayer>비밀번호 변경하기</ButtonLayer>
                                </Button>
                            </Link>
                        </NewpasswordFrame>
                    </NewpasswordPane>
                </NewpasswordContent>
            </NewpasswordSection>
        </div>
    );
}
