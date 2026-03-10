//console.log("hello world");
 //document.write("hello world");

<script type="text/javascript">
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="shivam";
console.log(num);
console.log(tupeof(num));
num=null;
console.log(num)
console.log(typeof(num));
num=undefined;

var sayHello=function() {
    alert("hello world")
}

var numberArray=[1,2,3];
var animals=new Array("cat","dog");

var person ={
    age:'20';
}

const sym1=symbol(4);
console.log(sym1);

const sym2=symbol(4);
console.log(sym2);
if(sym1=sym2){
    console.log("true");
}

else{
    console.log("false");
}

var count;
document.write("starting loop"+"<br/");
for(count=0;count<10;count++);
document.write("current count:"+count);
document.write("<br/");
}
document.write("loop stopped!");
</script>

