
// task one vedio 17

let the_title = "Elzero" ,
the_description = 'Elzero web school',
the_date ="25/10";

let test =`
<div class="card">
    <div class="child">
        <h1> Hello ${the_title}</h1>
        <p>${the_description}</p>
        <span>${the_date}</span>
    </div>
</div>
`;
document.write(test.repeat(4));
// challang one vedio 22
let m = "-100";
let n= '20';
let o = 30 ;
let p = true;

console.log(-m   *  +n) //2000
console.log(-m + n++  +o + n++ + ++p) ;
//173
// challang one vedio 22
let x = "-100";
let y= '20';
let z = 30 ;
let w = true;

console.log(+x++ +y++ + ++z )
// []
 // challange of number; vedio 27
let a = 1_00 ;
let b = 2_00.5;
let c = 1e2 ;
let d = 2.4 ;
// task 1
console.log(Math.trunc(2.4)) ;
console.log(Math.floor(2.4))

console.log( 1_00 * (Math.trunc(2.4)) )
console.log(Math.round(Math.ceil(2.4)));
// task 2
console.log(Math.trunc(2.4));
console.log(Math.round(2.4));
console.log(Math.floor(2.4));
console.log(parseInt(2.4))
// 66.67  , 67
console.log(Math.ceil(2_00.5) / Math.ceil(2.4));
console.log(Math.trunc(2_00.5) / Math.ceil(3));

// challange of string vedio 30
let se = ' Elzero web school' ;
console.log(se.trim().charAt(2).toUpperCase() + se.slice(4,7));  //Zero
console.log(se.charAt(14).toUpperCase().repeat(8));             ///HHHHHHHH
console.log(se.substring(3,7).split());                         ///[Zero]
console.log(se.substring(0, 7) + se.substring(11 , 18));        ///Elzero school
console.log(se.charAt(1)
.toLowerCase() + se.slice(2 ,17).toUpperCase() + se.charAt(17).toLowerCase()) //eLZERO WEB SCHOOl 


// if challeng vedio 37
let a_1 = 10;
if ( a > 10){
    console.log(10) ;
}
else if(a>= 10 && a <=40){
    console.log( "10 to 40")
} else{
    console.log('unknow')
}
    a_1 > 10 ?  console.log(10) 
    :(a>= 10 && a <=40) ? console.log( "10 to 40") 
    : console.log('unknow')
 // write
 let st = "Elzero web school";
 if( (st.length * 2).toString() === '34'){
    console.log('good')
 }
 else{
    console.log('false')
 }
 
//  w postion
if (st.substring(st.charAt(7) ==='w')){
    console.log('good')
}
else{
    console.log('false')
 }
//  ElzeroElzero
if (st.slice(0,6).repeat(2) === 'ElzeroElzero'){
    console.log('good')
}
else{
    console.log('false')
 }
// //  ===(number)
if (typeof se.length ==='number'){
    console.log('good')
}
else{
    console.log('false')
 }
//  !==(string)
 if (typeof se.length !=='string'){
    console.log('good')
}
else{
    console.log('false')
 }
 
//  // challeng  off arry vedio 47
let zero = 0 ;
let counter = 3 ;
let my = ['ahmed', 'mazerom', 'elham', 'osama', 'ameer']
// write osama , elham , mazerom ,ahmer
console.log(my.slice(zero , my.indexOf()).reverse());
// slice (elham , mazerom)
console.log(my.slice( (my.indexOf('mazerom')) , counter).sort())
// elzero
my[1] ='Elzero';
console.log(my.slice(my.indexOf('Elzero'),my.indexOf('elham')))

// write ro
console.log( my[1].slice (my.lastIndexOf('ameer') ))


// challeng loop  vedio 56 
let myAdmin = ['ahmed' , 'osama ','sayed ', ' stop ', 'samera' ];
let myEmployess = ['amgad' ,'samah' , 'ameer' , 'omar','othman' ,' amany' , 'samia'];

document.write(`<div>We Have ${myAdmin.length} Admin</div>`)
document.write(`<hr>`)
document.write(`<div>We Have ${myAdmin.length} Admin</div>`)
document.write(`<div>The Admin For Team Is ${myAdmin[0]} </div>`)

for (i = 0 ; i < 3 ; i++){
    document.write( `<div>`)
    document.write( `<p> The Admin For Team Is ${i + 1} ${myAdmin[i]} </p>`)
    document.write( `<h2> Team Members: </h2>`);
    
        
        let x = myEmployess.filter(function (ele){
            return ele.startsWith('a')
        })
        document.write( `<p>${x}</p> `)
        
        let y = myEmployess.filter(function (ele){
            return ele.startsWith('o')
        })
        document.write( `<p>${y}</p> `)
        let z = myEmployess.filter(function (ele){
            return ele.startsWith('s')
        })
        document.write( `<p>${z}</p> `)
    
    document.write( `</div>`)
    }

// scop function challeng  vedio 70
let names = function( ...number){


    return `String  ${number}// =>Done !`
     
 };
 console.log(names("osama", "mohamed", "ali", "ibrahim"))
 
 // write 80
 let numbers = [20 ,50 , 10 ,60]
 
 function calc (one ,  two , ...num){
 
     return  num **2 /two*one
 }
 console.log(calc(10, 50 ,  20  ));
 // // 

// challeng map filter reduis vedio 78
let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
let solution =myString.split("").map(function(ele){
    return isNaN(parseInt(ele)) ? ele : ""

}).filter(function(el){
    return !el.startsWith("," );
    
})
.filter(function(el){
    return !el.startsWith("_" );
    
})
.reduce(function(acc ,current){
    return `${acc}${current}`
}).slice(1 , 16)
// un
console.log(solution)


// []