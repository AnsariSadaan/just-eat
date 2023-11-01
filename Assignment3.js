import React from "react";
import ReactDOM from "react-dom/client";


const elemJSX = (
        <div className='title'>
                <h1 className='title1'>H1 title</h1>
                <h2 className='title2'>H2 title</h2>
                <h3 className='title3'>H3 title</h3>
        </div>
)

const titleElement = React.createElement('div', {className: 'title'}, 
React.createElement('h1', {}, 'H1'),
React.createElement('h2', {}, 'H2'),  
React.createElement('h3', {}, 'H3')
)


const ElemJsx = (props) => {
    return (
        <div className={`title ${props.extraClassName}`}>
            <h1>H1 Title</h1>
            <h2>H2 Title</h2>
            <h3>H3 Title</h3>
        </div>
    )
}

const Header = () => {
    return (
        <>
        <div className="header">
            <img className="logo"  src="https://images.unsplash.com/photo-1697899001862-59699946ea29?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" />
            <input type="search" placeholder="Search..." className="search" />
            <img src="https://images.unsplash.com/photo-1697899001862-59699946ea29?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="user-icon" className="user-icon" />
        </div>
        {elemJSX}
        {titleElement}
            {<ElemJsx extraClassName="extra-class"/>}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
