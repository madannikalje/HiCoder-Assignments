let str = "HICODER"
function sprd(...args){
    args.forEach(a => {
        console.log(a)
    })
}
sprd(...str.split(""))