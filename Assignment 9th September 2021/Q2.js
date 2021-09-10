const reducer = (previousValue, currentValue) => [previousValue,currentValue].join(" ");

function joinString(...args){
    
    console.log(args.reduce(reducer))
}

joinString("JavaScript", "Rest", "Parameters")