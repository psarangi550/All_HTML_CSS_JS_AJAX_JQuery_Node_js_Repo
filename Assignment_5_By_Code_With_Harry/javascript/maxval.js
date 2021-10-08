function max(num){
    var a=num[0]
    for(var i=0;i<num.length;i++){
    if (a>num[i])
    {
    return a
    }
    a=num[i];
    }
    return a;
    }
    max([30,20,50,40])