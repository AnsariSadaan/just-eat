import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            },
        };
        console.log(this.props.name + 'child Construtor');
        
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/AnsariSadaan');
        const json = await data.json();
        this.setState({
            userInfo:json
        })
        console.log(json);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component will mount");
    }

    render(){
        console.log("child render")
        const {name, location, avatar_url} = this.state.userInfo;
        // debugger;
        return <div className="user-card">
            <img width={"200px"} src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location} </h3>
            <h4>Contact: AnsariSadaan</h4>
        </div>
    }
}
export default UserClass;