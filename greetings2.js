let root = ReactDOM.createRoot(document.getElementById('myreactdiv'));

//functional component that takes props
let MyFunComponent = (props) => 
{
     console.log(props);
    return (<h1> Hello Jane!</h1>);
}

root.render(<MyFunComponent name="Hello Jane!"/>);

