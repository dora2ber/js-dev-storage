
//브라우저에 로컬 데이터 저장하기.
//주요 메서드
// 값저장 --> localStorage.setItem('key',value);
// 값 가져오기 --> localStorage.getItem('key');
// 키를 새로운값으로 저장하면 덮어 쓰기가 되면서 기존 정보가 수정된다.

window.onload = () => {
    //set data 버튼
    const btnSLD = document.querySelector('.btnSetLocalData');
    // 인풋 객체 가져오기.
    const btnGLD = document.querySelector('.btnGetLocalData');

    console.log(btnSLD);
    console.log(btnGLD);

    //input 버튼 박스
    const input = document.querySelector('input');

    btnSLD.addEventListener('click', () => {
        //입력한텍스트 값 가져오기
        const inputValue = input.value;
        console.log(inputValue);


        //localStorage에 저장하기
        localStorage.setItem('userid',inputValue);
        input.value = '';       
    });

    btnGLD.addEventListener('click', () => {
        const getData = localStorage.getItem('userid');
        
        if(!getData)
            alert('해당키로 노컬에 저장된 데이타가 없습니다.')
        else
            input.value = getData;

    });
}