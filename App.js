import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX - HTML like or XML like syntax
// JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)
const Title = function () {
        return (
                <h1 id="heading">Namaste React from own 🚀</h1>
        )
};

const elem = <span>React Element </span>

const rent = (
        <h1 className='rent'>
                {elem}
                this is rent heading
        </h1>
)

const number = 1000
const Footer = () => <p>copyright &copy; Ansari sadaan</p>
const Hello = () => {
        return <h1>this is react element from hello javascript function</h1>
}


//if interviewer ask what is component composition so this is components composition calling a component in component 
const HeadingComponent = () => (
        <div className="container">
                {/* <Title />
                <Title></Title> */}
                {Title()}
                {/* above three declaration are same things it will print same output*/}
                <Hello />
                <h2>{number}</h2>
                {rent}
                <h2>{200+300}</h2>
                {console.log("this is from jsx")}
                <h1>This is functional component</h1>
                <Footer />
        </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ElemJsx extraClassName="extra-class" />)
