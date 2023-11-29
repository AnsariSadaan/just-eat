import React from "react"
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props){
    super(props);
    // console.log('Parent Constructor')
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount")
  }

  render(){
    return (
      <>
        <div>About</div>
        <div>
          loggedIn User : <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
          
        </div>
        <h1>This is about page from /about</h1>
        <User name={"Ansari Sadaan (function)"} />
      </>
    ) 
  }
}


export default About