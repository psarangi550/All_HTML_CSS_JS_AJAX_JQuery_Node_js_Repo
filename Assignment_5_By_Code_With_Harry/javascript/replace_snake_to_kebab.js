var str=prompt("Enter any Name in Snake_Case")
function snake_to_kebab(str){
s3=""
for (var i=0;i<str.length;i++){
    if (str[i]=="_"){
    s3=s3+"-"
    }
    else{
    s3=s3+str[i];
    }
}
return s3;
}
alert(snake_to_kebab(str));
