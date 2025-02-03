function nam(){

    let fullname = document.getElementById("fullname").value;
    let full = fullname;
    document.getElementById("g").value= full;

}
function school(){
    let test1 = document.getElementById("test1").value;
    let test2 = document.getElementById("test2").value;
    let exam = document.getElementById("exam").value;

    let total = Number(test1) + Number(test2)+ Number(exam);
    let total2 = total;

    document.getElementById("n").value = total2;

    document.getElementById("total").value = total2;


    if(total2 >=70 && total2 <=100){
        document.getElementById("grade").value = "A";
    }
    else if(total2 >=60 && total2 <=69){
        document.getElementById("grade").value = "B";
    } 
    else if(total2 >=50 && total2 <=59){
        document.getElementById("grade").value = "C";
    } 
    else if(total2 >=45 && total2 <=49){
        document.getElementById("grade").value = "D";
    } 
    else if(total2 >=40 && total2 <=44){
        document.getElementById("grade").value = "E";
    } 
    else{
        document.getElementById("grade").value = "F";
    } 

    let grade = document.getElementById("grade").value;

    let grade5 = grade;

    document.getElementById("o").value=grade5;


    if( grade5 == "A"){
        document.getElementById("q").value = "Excellent";
    }
    else if( grade5 == "B"){
        document.getElementById("q").value = "Very Good";
    }
    else if( grade5 == "C"){
        document.getElementById("q").value = "Credit";
    }
    
    else if( grade5 == "D"){
        document.getElementById("q").value = "Pass";
    }
    else if( grade5 == "E"){
        document.getElementById("q").value = "Pass";
    }
    else{
        document.getElementById("q").value = "Fail";
    } 

}
function sub(){

    let subject = document.getElementById("subject").value;

    let fsubject = subject;

    document.getElementById("p").value=fsubject;


}

function data(){
    let test = document.getElementById("test").value;
    let test0 = document.getElementById("test0").value;
    let exam1 = document.getElementById("exam1").value;

    let tota = Number(test) + Number(test0)+ Number(exam1);

    let totaa = tota

    document.getElementById("s").value = totaa;


    document.getElementById("tota").value = totaa;

    if(totaa >=70 && totaa <=100){
        document.getElementById("grade1").value = "A";
    }
    else if(totaa >=60 && totaa <=69){
        document.getElementById("grade1").value = "B";
    } 
    else if(totaa >=50 && totaa <=59){
        document.getElementById("grade1").value = "C";
    } 
    else if(totaa >=45 && totaa <=49){
        document.getElementById("grade1").value = "D";
    } 
    else if(totaa >=40 && totaa <=44){
        document.getElementById("grade1").value = "E";
    } 
    else{
        document.getElementById("grade1").value = "F";
    } 
    let grade1 = document.getElementById("grade1").value;

    let grade6 = grade1;

    document.getElementById("u").value=grade6;

    if( grade6 == "A"){
        document.getElementById("v").value = "Excellent";
    }
    else if( grade6 == "B"){
        document.getElementById("v").value = "Very Good";
    }
    else if( grade6 == "C"){
        document.getElementById("v").value = "Credit";
    }
    
    else if( grade6 == "D"){
        document.getElementById("v").value = "Pass";
    }
    else if( grade6 == "E"){
        document.getElementById("v").value = "Pass";
    }
    else{
        document.getElementById("v").value = "Fail";
    } 

}


function dat(){

    let subjec = document.getElementById("subjec").value;

    let fsubjec = subjec;

    document.getElementById("r").value=fsubjec;


}

function dream(){
    let tes = document.getElementById("tes").value;
    let te = document.getElementById("te").value;
    let exa = document.getElementById("exa").value;

    let tot = Number(tes) + Number(te)+ Number(exa);

    document.getElementById("x").value = tot;

    document.getElementById("tot").value = tot;

    if(tot >=70 && tot <=100){
        document.getElementById("grad").value = "A";
    }
    else if(tot >=60 && tot <=69){
        document.getElementById("grad").value = "B";
    } 
    else if(tot >=50 && tot <=59){
        document.getElementById("grad").value = "C";
    } 
    else if(tot >=45 && tot <=49){
        document.getElementById("grad").value = "D";
    } 
    else if(tot >=40 && tot <=44){
        document.getElementById("grad").value = "E";
    } 
    else{
        document.getElementById("grad").value = "F";
    } 

    let grad = document.getElementById("grad").value;
    let grade7 = grad;

    document.getElementById("y").value=grade7;

    if( grade7 == "A"){
        document.getElementById("z").value = "Excellent";
    }
    else if( grade7 == "B"){
        document.getElementById("z").value = "Very Good";
    }
    else if( grade7 == "C"){
        document.getElementById("z").value = "Credit";
    }
    
    else if( grade7 == "D"){
        document.getElementById("z").value = "Pass";
    }
    else if( grade7 == "E"){
        document.getElementById("z").value = "Pass";
    }
    else{
        document.getElementById("z").value = "Fail";
    } 

   

    
    
}
function drea(){
    let subje = document.getElementById("subje").value;

    let fsubje = subje;

    document.getElementById("w").value=fsubje;

}

function cool(){
    let t = document.getElementById("t").value;
    let vr = document.getElementById("vr").value;
    let ex = document.getElementById("ex").value;

    let to = Number(t) + Number(vr)+ Number(ex);

    document.getElementById("to").value = to;

    if(to >=70 && to <=100){
        document.getElementById("gra").value = "A";
    }
    else if(to >=60 && to <=69){
        document.getElementById("gra").value = "B";
    } 
    else if(to >=50 && to <=59){
        document.getElementById("gra").value = "C";
    } 
    else if(to >=45 && to <=49){
        document.getElementById("gra").value = "D";
    } 
    else if(to >=40 && to <=44){
        document.getElementById("gra").value = "E";
    } 
    else{
        document.getElementById("gra").value = "F";
    } 
}
function viktor(){
    let from = document.getElementById("from").value;
    let hi = document.getElementById("hi").value;
    let am = document.getElementById("am").value;

    let toa = Number(from) + Number(hi)+ Number(am);

    document.getElementById("toa").value = toa;

    if(toa >=70 && toa <=100){
        document.getElementById("de").value = "A";
    }
    else if(toa >=60 && toa <=69){
        document.getElementById("de").value = "B";
    } 
    else if(toa >=50 && toa <=59){
        document.getElementById("de").value = "C";
    } 
    else if(toa >=45 && toa <=49){
        document.getElementById("de").value = "D";
    } 
    else if(toa >=40 && toa <=44){
        document.getElementById("de").value = "E";
    } 
    else{
        document.getElementById("de").value = "F";
    } 
}
function victor(){
    let come = document.getElementById("come").value;
    let nice = document.getElementById("nice").value;
    let good = document.getElementById("good").value;

    let goo = Number(come) + Number(nice)+ Number(good);


    document.getElementById("goo").value = goo;

    if(goo >=70 && goo <=100){
        document.getElementById("gr").value = "A";
    }
    else if(goo >=60 && goo <=69){
        document.getElementById("gr").value = "B";
    } 
    else if(goo >=50 && goo <=59){
        document.getElementById("gr").value = "C";
    } 
    else if(goo >=45 && goo <=49){
        document.getElementById("gr").value = "D";
    } 
    else if(goo >=40 && goo <=44){
        document.getElementById("gr").value = "E";
    } 
    else{
        document.getElementById("gr").value = "F";
    } 
}


