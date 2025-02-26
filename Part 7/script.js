                                        //this

let info ={
    name: "Yash",
    gemder: "Male",
    eng: 90,
    math: 90,
    hin: 90,
    // avg(){                            ->Give Error
    //     num=(eng+math+hin)/3;
    //     return num;
    // }
    avg(){
        let num=(this.eng + this.math + info.hin)/3; // this=info(here)
        console.log(this);
        return num;
    }
}
console.log(info.avg());


                                       //try-catch
//console.log(a);      ->give Error
console.log("start");
try{
    console.log(a);
}catch{
    console.log("Variable does not define");
}
console.log("end");

console.log("start");
try{
    console.log(a);
}catch(yash){
    console.log("Variable does not define");
    console.log(yash);
}
console.log("end");