import React from "react"
// import User from "./User"
import UserClass from "./UserClass"
import Parent from "./Parent";
import User from "./User";


class About extends React.Component {
  constructor(props){
    super(props);
    // console.log('Parent Constructor')
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount")
  }

  render(){
    // console.log('parent render')
    return (
      <>
        <div>About</div>
        <h1>This is about page from /about</h1>
        <User name={"Ansari Sadaan (function)"} />
        {/* <User  /> */}
      </>
    ) 
  }
}



// const About = () => {
//   return (
//     <>
//     <div>About</div>
//     <h1>This is about page from /about</h1>
//     <User name={"Ansari Sadaan (function)"}/>
//     <UserClass name={"Ansari Sadaan (class)"} location={"Mumbai City (class)"} contact={"@sadaan21 (class)"}/>
//     </>
//   )
// }

export default About