for (var i=1;i<=5;i++){
    for(var j=1 ;j<=10;j++){
        var a,num;
        if(i==1){
            a=0;
        }else if(i==2){
            a=10;
        }else if (i==3){
            a=20;
        }else if (i==4){
            a=30
        }else{
            a=40;
        }
        num=a+j;
        var div= "<div class='box'> <p> "
        div+= num 
        div+="</p> </div>"
        document.write(div);     
        //document.write("1") 
        if(j==10){
            document.write('<br>')
        }    
    }
    //document.write('<div style="clear:both"></div>');
}