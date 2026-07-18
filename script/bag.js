function showMyBag() {
    // 1. [Object가 담긴 Array] 객체들이 담긴 배열 데이터
    var myBag = [
        { item: "스마트폰 📱", amount: 1 },
        { item: "지갑 💳", amount: 1 },
        { item: "주민등록증 🪪", amount: 1 },
        { item: "운전면허증 🪪", amount: 1 },
        { item: "학생증 🪪", amount: 1 },
        { item: "체크카드 💳", amount: 2 },
        { item: "노트북 💻", amount: 1 },
        { item: "텀블러 🥤", amount: 3 }
    ];

    // 2. 출력할 텍스트 기본 세팅
    var itemslist = "";

    // 3. ★ for...in 루프 활용
    // myBag 배열의 인덱스(0, 1, 2...)를 순서대로 변수 i에 자동으로 넣어줍니다.
    for (var i in myBag) {
        // 백틱을 사용해 가독성을 높였습니다.
        itemslist += `- ${myBag[i].item} : ${myBag[i].amount}개\n`;
    }

    // 4. 전체 레이아웃을 백틱으로 한눈에 보이게 조립
    var resultText = `🎒 [내 가방 속 물품 목록]
-----------------------
${itemslist}-----------------------
총 물품 종류: ${myBag.length}가지`;

    // 5. 알림창 출력
    alert(resultText);
}