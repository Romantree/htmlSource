console.log("Q1. 1 ~ 100까지 홀수 합, 짝수 합","<br>");
var oddSum=0;
var evenSum=0;

for(var i=1; i<=100; i++){
    //홀수일때
if(i%2==1){
    oddSum+=i;
}
if(i%2==0){
    evenSum+=i;
}
}
console.log("홀 수 합 :" +oddSum);
console.log("짝수 합 : " +evenSum);

     // Q3. 구구단 전체 짝수단만 출력
    //  console.log("Q3. 구구단 전체 짝수단만 출력","<br>");
    //  for (var i = 2; i <= 9; i++) {
    //      if (i % 2 == 0) {
    //          for (var j = 1; j <= 9; j++) {
    //             console.log(i + "x" + j + "=", i * j, " ");
    //          }
    //          console.log("<br>");
    //      }
    //  }
    //  console.log("<br>");

    //  console.log("Q4. 구구단 전체 홀수단만 출력","<br>");
    //  for (var i = 2; i <= 9; i++) {
    //      if (i % 2 == 1) {
    //          for (var j = 1; j <= 9; j++) {
    //             console.log(i + "x" + j + "=", i * j, " ");
    //          }
    //          console.log("<br>");
    //      }
    //  }
    //  console.log("<br>");

     for(var i=2; i<=9; i++){
        if(i%2==1){
        for (var j=1; j<=9;j++){
            console.log(i+"X" + j + "=" +i*j);
        }
        }
     }