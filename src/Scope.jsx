//var a = 10;
function Scope (){
var a = 10;
var b = 20;
 console.log('Inside Fn a : ', a);
 console.log('Inside Fn b : ', b);
return (
    <div>
        <h2>Var A : {a}</h2>
        <h2>Var B : {b}</h2>
    </div>
)
}
console.log('Outside Fn a : ', a)
export default Scope;