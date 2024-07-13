# frontend
[UMC 6th 웹 프로젝트 '로컬마크'] Client

Table of Contents
1. Commit Convention
2. Issue template
3. PR template
4. Branch Management

1. Commit Convention
기본적인것 (feat, fix, chore, ..) 중점적으로 지키기!
제목	내용
init	브랜치 첫 커밋
feat	새로운 기능에 대한 커밋
fix	버그 수정에 대한 커밋
build	빌드 관련 파일 수정에 대한 커밋
chore	그 외 자잘한 수정에 대한 커밋
docs	문서 수정에 대한 커밋
style	style: 코드 스타일 혹은 포맷 등에 관한 커밋
refactor	코드 리팩토링에 대한 커밋
2. Issue template
## 💚 어떤 기능인가요?

## ✅ To Dos

- [ ]
- [ ]
- [ ]
3. PR template
<!-- PR 이름은 '[페이지명] 작업 내용'으로 통일할게요! -->
## 이슈 넘버
- close # 
<!-- # 뒤에 이슈넘버를 써서 이슈를 닫아주세요 -->

## 구현 사항
<!-- 실제로 변경한 사항을 설명해주세요.-->

- [ ]
- [ ]
- [ ]
- [ ]

## Need Review
- ~ 부분 이렇게 구현했어요, 피드백 부탁해요!
<!-- 어떤 부분에 리뷰어가 집중해야 하는지 or 해당 PR에서 논의가 필요한 사항을 적어주세요. -->



## 📸 스크린샷
<!-- 팀원들이 이해하기 쉽도록 스크린샷을 첨부해주세요. -->



## Reference
<!-- 참고한 사이트가 있다면 링크를 공유해주세요. -->

4. Branch Management
Git 브랜치 전략은 Git Flow를 참고하여 팀에 맞게 변경하였습니다.
main: 우리가 개발 최종시에 Merge를 하는 곳 ❗️
develop : 개발할 때 Merge
hotfix : QA 시 수정사항 반영
feature: 기능을 개발하면서 각자가 사용할 브랜치
test: 개인 연습 브랜치
1. feat 브랜치를 파고 이슈 번호를 포함한 기능 단위 브랜치 생성 ex)feat/#6-login

3. develop 브랜치로 merge

4. 개발이 최종적으로 끝나면 main에 dev 브랜치 merge

5. 개발단계에서 merge가 이루어지면 develop pull 받아오기 !
