let info ={
    name: "Yash",
    gender: "Male",
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



