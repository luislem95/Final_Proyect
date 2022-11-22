//si pongo react, {component puedo solo poner component}
import React, {Component}from "react";



export default class Index extends Component{

    constructor(props){
        super(props)

        this.state={
            dataLoad:false,
            data:[]

        }
    }
    /*
    componentDidMount(){
      this.fetchApi();

    }
*/
//showing info
dataLoad(){

    fetch(`http://127.0.0.1:8000/api/products/`)
    .then(resp=>resp.json())
    .then((dataResp)=>{

     console.log(dataResp);
    this.setState({dataLoad:true, data:dataResp})
})
.catch(console.log)

}
//mount the info
componentDidMount(){
    this.dataLoad();

  }

    
    render(){
       
        const{dataLoad,data}=this.state
        if(!dataLoad){ return(<div>Cargando...</div>)}
        else{

        return(

 
          <div className="container-fluid bg-light" style={{"marginTop":"100px"}} >
            <div className="row ">

{data.map(
        (data)=>(
            
            <div className="col m-5 " >
            <div className="card justify-content: center" style={{"width":"18rem"}}>
     <img className="card-img-top img-fluid cover" style={{"height" : "auto", "width" : "100vh"}}   src={data.img} alt={data.img} /> 
     <div className="card-body bg-secondary">
       <h5 className="card-title">{data.name}</h5>
       <h6 className="card-title">{data.author}</h6>
       <p className="card-text" style={{"height" : "15px", "width" : "auto"}}>{data.description}</p>
       <a href={data.link} className="btn btn-light" target={"_blank"} rel="noreferrer">Leer Libro </a>
    
      
     </div>
     </div>
 </div>
 
    )
    )
    }
    
</div>
</div>
)
}
    }
}