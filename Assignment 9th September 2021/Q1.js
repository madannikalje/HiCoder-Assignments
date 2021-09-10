function sum () {
    let sum=0;
    Object.keys(arguments).forEach(key => {
        let type = typeof arguments[key]
        switch (type){
            case "Number":
                sum = sum+1
                
            case "string":
                arguments[key].split("").forEach(a => {
                    sum = sum + a.charCodeAt(0)
                    
                })
            case "object":
                sum =  sum;
                
            case "undefined":
                //F
        }
    })
    console.log("sum = " + sum)
}

sum(10, "Hi", null, undefined, undefined, 20)