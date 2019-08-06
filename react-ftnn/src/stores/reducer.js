export default (state = {
    data: {
        xxx: "xxx"
    },
    //数据写这里
}, action) => {
    switch (action.type) {
        //传值过来判断后做你想要的逻辑
        case 'AAA':

            return state;
        case 'BBB':

            return state
        default:
            return state
    }
}