// // import ReactDOM from 'react-dom';
function Cool() {
    return (
        <ul>
            <li>List 1</li>
            <li>List 2</li>
        </ul>
    )
   
}


// const cool = <h1 className="not">Hello everyone</h1>
// ReactDOM.render(cool, document.getElementById("root"));


// // ReactDOM.render(<ul>
// //     <li>This is list 1</li>
// //     <li>This is list 2</li>
// // </ul>, document.getElementById("root"));


//wrap when you have more elements
const page =(
    <div>
        <h1>Hello this is heading in page</h1>
        <p>Hello this is Paragraph</p>
    </div>)
function Both() {
    return (
        <div>
            <h1>Hello this is heading in function</h1>
            <p>Hello this is Paragraph</p>
        </div>
    )
}
ReactDOM.render(
    page,
    document.getElementById('root')
)

//why react?
//just combining the different components

//this is not as good as react
// const name1 = document.createElement('h1');
// name1.textContent = "This is Harish Raghavan";
// name1.className = "header"
// document.getElementById('root').append(name1);
// console.log(name1);
// console.log(cool);

//challenge
const page1 = (
    <nav>
        <h1>Raghav</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(page1, document.getElementById('root'));