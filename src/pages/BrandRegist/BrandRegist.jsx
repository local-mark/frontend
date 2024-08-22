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
import { useRef, useState } from 'react';
import { postData } from '../../services/api';

export default function BrandRegist() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null); //파일 입력 참조 생성
    const [uploadImage, setUploadImage] = useState(null);
    const [brand_name, setBrand_name] = useState('');
    const [region_id, setRegion_id] = useState('');
    const [brand_category, setBrand_category] = useState('');
    const [brand_url, setBrand_url] = useState('');
    const [description, setDescription] = useState('');
    const [business_name, setBusiness_name] = useState('');
    const [business_registration_number, setBusiness_registration_number] = useState('');
    const [contact, setContact] = useState('');

    const handleImgClick = () => {
        fileInputRef.current.click(); // Img 클릭 시 파일 입력 요소 클릭
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadImage(file); // Store the file object directly
        }
    };

    const handleRegist = async (e) => {
        e.preventDefault();

        // FormData 객체 생성 및 데이터 추가
        const formData = new FormData();
        formData.append('region_id', region_id);
        formData.append('brand_name', brand_name);
        formData.append('brand_category', brand_category);
        formData.append('brand_url', brand_url);
        formData.append('description', description);
        formData.append('business_name', business_name);
        formData.append('business_registration_number', business_registration_number);
        formData.append('contact', contact);
        if (uploadImage) {
            formData.append('brand_image', uploadImage); // Append the file object, not the base64 string
        }

        try {
            await postData('/brand?directory=brands', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('브랜드 등록 성공!');
            navigate('/');
            localStorage.setItem('is_brand_registered', 1);
            console.log('브랜드 등록 성공!');
        } catch (error) {
            if (error.response) {
                console.log('브랜드 등록 실패');
                // Handle the error
            }
        }
    };

    return (
        <div>
            <RegistSection>
                <RegistFrame>
                    <div>내 브랜드 등록</div>
                    <DownFrame>
                        <Img onClick={handleImgClick}>
                            {uploadImage ? (
                                <img
                                    src={URL.createObjectURL(uploadImage)}
                                    alt="Uploaded"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            ) : (
                                <DesignedIcons />
                            )}
                        </Img>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        ></input>
                        <FormFrame>
                            <FormContainer>
                                <h1>브랜드명</h1>
                                <InputField>
                                    <TextLayer
                                        type="text"
                                        value={brand_name}
                                        onChange={(e) => {
                                            setBrand_name(e.target.value);
                                        }}
                                    ></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>활동 지역 선택</h1>
                                <InputField>
                                    <TextLayer
                                        type="text"
                                        value={region_id}
                                        onChange={(e) => {
                                            setRegion_id(e.target.value);
                                        }}
                                    ></TextLayer>
                                    <RequestButton>지역 찾기</RequestButton>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <div className="title-wrapper">
                                    <h1>브랜드 카테고리</h1>
                                    <h2>(최대 3개까지 선택 가능)</h2>
                                </div>
                                <InputField>
                                    <TextLayer
                                        type="text"
                                        value={brand_category}
                                        onChange={(e) => {
                                            setBrand_category(e.target.value);
                                        }}
                                    ></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <div className="title-wrapper">
                                    <h1>브랜드 URL</h1>
                                    <h2>(인스타그램, 자사몰 홈페이지 등)</h2>
                                </div>
                                <InputField>
                                    <TextLayer
                                        type="text"
                                        value={brand_url}
                                        onChange={(e) => {
                                            setBrand_url(e.target.value);
                                        }}
                                    ></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>브랜드 및 상품 소개</h1>
                                <InputField style={{ height: '320px' }}>
                                    <TextLayer
                                        type="text"
                                        value={description}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                    ></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>사업자명</h1>
                                <InputField>
                                    <TextLayer
                                        type="text"
                                        value={business_name}
                                        onChange={(e) => {
                                            setBusiness_name(e.target.value);
                                        }}
                                    ></TextLayer>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>사업자 등록 번호</h1>
                                <InputField>
                                    <TextLayer
                                        type="text"
                                        value={business_registration_number}
                                        onChange={(e) => {
                                            setBusiness_registration_number(e.target.value);
                                        }}
                                    ></TextLayer>
                                    <RequestButton>인증요청</RequestButton>
                                </InputField>
                            </FormContainer>
                            <FormContainer>
                                <h1>담당자 연락처</h1>
                                <InputField>
                                    <TextLayer
                                        type="text"
                                        value={contact}
                                        onChange={(e) => {
                                            setContact(e.target.value);
                                        }}
                                        placeholder="전화번호 입력"
                                    ></TextLayer>
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
                                <StateLayer onClick={handleRegist} style={{ color: '#FFF' }}>
                                    브랜드 신청하기
                                </StateLayer>
                            </Button>
                        </ButtonFrame>
                    </DownFrame>
                </RegistFrame>
            </RegistSection>
        </div>
    );
}
