let root = ReactDOM.createRoot(document.getElementById('myreactdiv'));

//functional component that takes props
let MyFunGreetings= (props) => 
{
     console.log(props);
    return (<h1> Welcome to my project! </h1>);
}

root.render(<MyFunComponent name="Greetings!!"/>);
