function saturdayFun (activity = 'roller-skate'){
    switch(activity) {
        default:
            return(`This Saturday, I want to ${activity}!`);
}
}
saturdayFun();


function mondayWork (activity = 'go to the office'){
    switch(activity) {
        default:
            return(`This Monday, I will ${activity}.`);
}
}
mondayWork();

function wrapAdjective(wrapper = "*"){
    const innerFunction = function (msg){
        return `You are ${wrapper}${msg}${wrapper}!`
    
    }
    return innerFunction
}



