function checkGrade() {
    // 1. 과목명이 담긴 배열을 선언합니다.
    var subjects = ["HTML", "CSS", "JavaScript"];
    
    // 2. 점수들을 누적하여 더해줄 총점 변수를 0으로 초기화합니다.
    var total = 0;

    // 💡 [추가] 각 과목의 점수를 기억해둘 임시 배열입니다. (뒤로 갔을 때 이전 점수를 깎아내기 위함)
    var scores = [];

    // 3. 배열의 길이(subjects.length = 3)만큼 반복문을 돌립니다.
    for (let i = 0; i < subjects.length; i++) {
        
        // prompt창으로 입력받은 값을 받아옵니다.
        let rawInput = prompt(`${subjects[i]} 점수를 입력해 주세요. (0 ~ 100)\n* [취소]를 누르면 이전으로 돌아갑니다.`);

        // 4. [취소] 버튼 예외 처리
        // 취소를 누르면 rawInput이 null이 되므로 즉시 함수를 종료(창 닫기)합니다.
        if (rawInput === null) {
            if (i === 0) {
                // 첫 번째 과목인 HTML에서 취소를 누르면 즉시 함수를 종료(창 닫기)합니다.
                return; 
        } else {
                // JavaScript에서 취소를 누르면 이전 과목으로 되돌아갑니다.
                
                scores.pop(); // 직전 과목의 점수를 배열에서 지웁니다.
                i = i - 2;    // for문의 i++와 만나서 최종적으로 i가 1 줄어들게 만듭니다.
                continue;     // 아래의 점수 저장 코드를 건너뛰고 위로 올라갑니다.
            }
        }

        // 5. 안전하게 숫자로 변환합니다.
        let score = Number(rawInput);

        // 6. [숫자 검사] 문자를 입력했거나(isNaN), 0 미만 또는 100을 초과한 경우
        if (rawInput.trim() === "" || isNaN(score) || score < 0 || score > 100) {
            alert("⚠️ 0부터 100 사이의 올바른 숫자를 입력해 주세요!");
            
            i--;        //  현재 순서(i)를 1 감소시켜서 이 과목을 다시 입력받게 만듭니다.
            continue;   //  아래의 total 누적 코드를 건너뛰고 다음 반복(조건식)으로 강제 이동합니다.
        }
        // 7. 정상 입력 시, 해당 칸에 점수를 저장합니다.
        scores[i] = score;
    }
       

    // 8. 반복문이 끝난 후, 저장된 점수들을 모두 더해 total을 구합니다.
    for (let j = 0; j < scores.length; j++) {
        total = total + scores[j];
    }

    // 9. 총점을 과목 수(3)로 나누어 평균을 구합니다.
    let average = total / subjects.length;

    // 10. 조건문을 사용하여 평균 60점을   기준으로 합격/불합격을 나눕니다.
    let result = "";
    if (average >= 60) {
        result = "🎉 합격입니다! 우수자로 선정되었습니다.";
    } else {
        result = "❌ 불합격입니다. 다음 기회에 힘내세요!";
    }

    // 11. `를 사용하여 최종 성적표를 깔끔하게 경고창으로 출력합니다.
    alert(`====== 📊 성적 결과표 ======
• 총점: ${total}점
• 평균: ${average.toFixed(1)}점
---------------------------
• 결과: ${result}`);
}