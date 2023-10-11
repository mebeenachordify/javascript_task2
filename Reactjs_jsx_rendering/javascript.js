// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// const obj = <h1>Hello, world</h1>;
// root.render(obj);


// let obj1=document.getElementById('root');
// const root=ReactDOM.createRoot(obj1);
// root.render(
//   <div>
//     <h2>Hello Everyone</h2>
//     <h3>This is my render function</h3>
//   </div>
// );


function Hi(){
  return<div>
    <h3>Have a nice day</h3>
  </div>
}


let obj2=document.getElementById('root');
const root=ReactDOM.createRoot(obj2);
root.render(
  <Hi></Hi>
)




// const root = ReactDOM.createRoot(
//     document.getElementById('app')
//   );
  
//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element);}
  
//   setInterval(tick, 1000);
  
  