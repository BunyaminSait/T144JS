// Kosullu ifadeler

let sayi=12;

if(sayi%2===0){
    console.log('sayi cift')
} else if(sayi===12){
    console.log('sayi 12 dir');
} else{
    console.log('sayi tek');
}

let x=12;
let y=28;
if(x%2===0 && y%2===0){
    console.log('her iki sayi da cifttir');
}else if(x%2===0 || y%2===0){
    console.log('sayilardan en az birisi cifttir');
}else{
    console.log('sayilardan hicbiri cift degildir');
}