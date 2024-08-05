import { Link } from 'react-router-dom';
import {
    AgreeFrame,
    Button,
    ButtonLayer,
    Checkbox,
    EditButton,
    FormFrame,
    IdFrame,
    Input,
    InputField,
    MypageeditBottom,
    MypageeditContent,
    MypageeditFrame,
    MypageeditPane,
    MypageeditSection,
    MypageeditTop,
    MypageeditWrapper,
    OkButton,
    OkbuttonLayer,
    PwFrame,
    TempFrame,
    TempFrame2,
    TempFrame3,
} from './MypageEdit.style';

export default function MypageEdit() {
    return (
        <div>
            <MypageeditSection>
                <MypageeditContent>
                    <MypageeditPane>
                        <MypageeditFrame>
                            <MypageeditWrapper>
                                <div>회원정보 수정</div>
                                <MypageeditTop>
                                    <IdFrame>
                                        <FormFrame>
                                            <TempFrame>
                                                <div>닉네임</div>
                                                <EditButton>수정</EditButton>
                                            </TempFrame>
                                            <InputField>
                                                <Input></Input>
                                            </InputField>
                                        </FormFrame>
                                        <FormFrame>
                                            <TempFrame>
                                                <div>아이디(이메일)</div>
                                                <EditButton>수정</EditButton>
                                            </TempFrame>
                                            <InputField>
                                                <Input></Input>
                                            </InputField>
                                        </FormFrame>
                                    </IdFrame>
                                    <PwFrame>
                                        <FormFrame>
                                            <TempFrame2>
                                                <div>비밀번호</div>
                                                <h6 className="h6">
                                                    비밀번호를 변경하시려면 현재 비밀번호를 입력해 주세요.
                                                </h6>
                                            </TempFrame2>
                                            <TempFrame3>
                                                <InputField>
                                                    <Input></Input>
                                                </InputField>
                                                <Link to="newpassword">
                                                    <OkButton>
                                                        <OkbuttonLayer>변경</OkbuttonLayer>
                                                    </OkButton>
                                                </Link>
                                            </TempFrame3>
                                        </FormFrame>
                                    </PwFrame>
                                </MypageeditTop>
                                <MypageeditBottom>
                                    <AgreeFrame>
                                        <Checkbox type="checkbox"></Checkbox>
                                        <div>이용약관, 개인 정보 수집 및 이용에 동의합니다.</div>
                                    </AgreeFrame>
                                    <h6 className="h6">탈퇴하기</h6>
                                </MypageeditBottom>
                            </MypageeditWrapper>
                            <Button>
                                <ButtonLayer>저장하기</ButtonLayer>
                            </Button>
                        </MypageeditFrame>
                    </MypageeditPane>
                </MypageeditContent>
            </MypageeditSection>
        </div>
    );
}
