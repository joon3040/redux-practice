let initialState = {
    count: 0,  // 아래 reducer 함수에서 action 값으로 매개변수들을 dispatch 함수로부터 받아와 저장하기 위해서
    id:"", // 변수를 선언하고 초기값을 설정해주는 작업을 initialState에서 해줘야 한다.
    password:"", //항상 마지막에 ,를 찍어줄 것
};


function reducer(state = initialState, action){
   
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + action.payload.num };   // state 값이 여러개일 경우 나머지는 그대로 유지하고 state의 count 값만 1증가시킨다는 의미
        case "LOGIN":                                                      //action.payload.num은 App.js의 dispatch() 함수의 매개변수 payload:{num:5}를 의미하며 count가 5씩 증가하게 만든다.
            return {...state, id:action.payload.id, password:action.payload.password,}; //action.payload.id와 action.payload.id.password는 App.js의 dispatch() 함수의 매개변수 payload:{id:"noona", password: "123"}를 의미한다.
        case "DECREMENT":
            return {...state, count: state.count - action.payload.num};
        default:
            return {...state}; // 기본적으로 입력해야 하는 기본값
    }
    
}

export default reducer;
