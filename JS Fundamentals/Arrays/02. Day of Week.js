function DayofWeek(day){
    let daysofWeek = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`]
    let result = daysofWeek[day-1];
    if(day>=1&&day<=7){
        console.log(result);
    }else{
        console.log(`Invalid day!`);
    }
}
DayofWeek(3)