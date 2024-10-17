import {Component} from "react"
import "./Style.css"
export default class App extends Component{
    constructor(props){
        super()
        this.state={
            keys:[],
            values:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json()).then(x=>{
            this.setState({
                keys:Object.keys(x[0]).slice(0,4),
                values:x.slice(0,5)
            })
        }
        )
    }
    render(){
        return(
            <div id="main">
             <table border={2} id="table">
                <thead id="demo">
                    <tr>
                    {this.state.keys.map((x,y)=>{
                        return(
                            <th key={y} class ="row">{x}</th>)
                    })}
                </tr></thead>
                <tbody>
                {this.state.values.map((x,y)=>{
                    return(
                    <tr key={x.id} >
                        <td>{x.id}</td>
                        <td class ="row">{x.name}</td>
                        <td>{x.username}</td>
                        <td class ="row">{x.email}</td>
                    </tr>
                )})}
                </tbody>
             </table>
             </div>
        )
    }

}