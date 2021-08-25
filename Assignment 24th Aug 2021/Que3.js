let Queue = new Array();

for (var i = 0;i < 10;i++) {
Queue.push(i);

}
console.log(Queue)

for (var i = 0;i < 5;i++) {
    Queue.shift();
    
}
console.log(Queue)