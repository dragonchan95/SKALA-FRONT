// ==========================================================================
// [수정버전] 버튼을 눌러야 시작하는 업다운 게임
// ==========================================================================

// HTML에서 onclick="startGame()"을 호출하면 이 상자 안의 코드가 비로소 실행됩니다.
function startGame() {

        // 1. 게임이 시작될 때마다 새롭게 무작위 비밀 숫자를 고릅니다.
    var computerNum = Math.ceil(Math.random() * 50) || 1; //또는 let computerNum= Math.floor(Math.random() * 50) + 1;
    var isPlaying = true;
    // 치트키 콘솔로그 (F12 콘솔 탭에서 확인 가능)
    console.log(`이번 판 컴퓨터의 비밀 숫자: ${computerNum}`);

        // 2. 본격적인 게임 무한 루프 시작
    for (let count = 1; isPlaying ; count++) {
    // 1. Number()를 씌우지 않고 글자나 null 상태 그대로 받아옵니다.
    let rawInput = prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");
    
    // 2. 취소 버튼을 눌렀을 때는 진짜 null이 들어오므로 게임을 종료합니다.
    if (rawInput === null) {
        alert("게임이 취소되었습니다.");
        isPlaying = false;
        break; // 루프 탈출
    }
    // 3. 공백 문자열 입력(그냥 엔터) 처리 및 숫자로 변환
        if (rawInput.trim() === "") {
            alert(`⚠️ 아무것도 입력하지 않으셨습니다. 다시 시도해 주세요.`);
            count--; // 유효하지 않은 입력이므로 도전 횟수 차감 방지
            continue;
        }
    // 4. 취소를 안 눌렀다면 이제 안전하게 숫자로 바꿉니다.
        let userGuess = Number(rawInput);

    // 5. 문자를 입력했거나, 1 미만이거나, 50을 초과한 경우 걸러내기
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
            alert(`⚠️ 올바른 숫자를 입력하지 않으셨습니다. 1부터 50 사이의 숫자만 입력해 주세요.`);
            count--; // 이상한 걸 입력했을 때는 도전 횟수가 안 올라가도록 깎아줍니다.
            continue; // 아래 정답 비교 코드를 건너뛰고 다음 루프(처음)로 이동합니다.
        }
            // 3. 정상적인 범위의 숫자일 때만 아래 비교를 실행합니다.
        if (userGuess === computerNum) {
            alert(`🎉 정답입니다! 축하합니다!\n👉 도전 횟수: ${count}번 만에 맞추셨습니다.`);
            isPlaying = false; // 💡 정답을 맞췄으니 상태를 false로 변경 
            
        } else if (userGuess > computerNum) {
            alert(`🔽 Down! 더 작은 숫자를 입력해 보세요. (현재 ${count}회 도전 중)`);
            
        } else if (userGuess < computerNum) {
            alert(`🔼 Up! 더 큰 숫자를 입력해 보세요. (현재 ${count}회 도전 중)`);
        }
    }
}