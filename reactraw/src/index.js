import React from "react";
import ReactDOM from 'react-dom';
import category from "./category";


const App = () => {
    return (<div><h1>This is heading tag</h1>
    <category/>
    <App1/>
    </div>
    )
}


const App1 = () => {
    return <p>This is paragraph</p>
}

const result = [<App/>  ]

ReactDOM.render(result, document.getElementById('root'));