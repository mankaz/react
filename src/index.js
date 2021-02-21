import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'
import {ThemeProvider} from "@material-ui/styles";
import Theme from "./components/theme";

ReactDom.render(
    <ThemeProvider theme={Theme}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
        </ThemeProvider>
    ,document.querySelector('#root'))





















//two practice
// import FirstComponent from "./FirstComponent";
//
// const App = ()=>{
//     return (
//         <div>
//             <FirstComponent name="mansour" family="kazemi" />
//             <FirstComponent name="reza" family="saiedi"/>
//             <FirstComponent name="rasoul" family="mankaz" />
//         </div>
//     )
// }
//


//first practice



// import React from 'react'
// import ReactDom from 'react-dom'
//
//    function getText() {
//     return ' get text button'
//     };
// const App = ()=> {
//     const text={text:'mansour'}
//     const style ={backgroundColor:'darkorange',color:'black'}
//     return (
//         <div>
//             <lable for="name" class="lable" >
//                 Enter Name :
//             </lable>
//             <input id="name" type="text"/>
//             <button type="button" style={style}>{text.text}</button>
//         </div>
//     )
// };
//
// ReactDom.render(
//     <App/>,
//     document.getElementById('root')
// )