//si pongo react, {component puedo solo poner component}
import React, {Component}from "react";




export default class Get extends Component{

    constructor(props){
        super(props)

        this.state={
          data:[]
        }  
    }
//this is to show all the api 
dataLoad(){

    fetch(`http://127.0.0.1:8000/api/products/`)
    .then(resp=>resp.json())
    .then((dataResp)=>{

     console.log(dataResp);
    this.setState({dataLoad:true, data:dataResp})
})

.catch(console.log)

}

//this is to mount the api
componentDidMount(){
    this.dataLoad();

  }


  //this is to send the props to other component
  loadId(id){
    
    this.props.history.push("/put/"+id)
  }


  // this is to delete an item 
  deleteData(id){
    var answer = window.confirm("Are you sure you want to delete the book?")
    
    
    if (answer) {
      // Save it!
     window.confirm("your book was deleted successfully")
     fetch(`http://127.0.0.1:8000/api/products/${id}`,{
      method:"DELETE"
     })
     .then((res)=>{
      window.location = '/admin';
     })
     
    } else {
      // Do nothing!
      window.location = '/admin';

    }

  }
    
    render(){
      //in this way you can cut the sentence to show a data and also if the page is loading you are going to know it for the message
        const{dataLoad,data}=this.state
        if(!dataLoad){ return(<div>The page is Loading...</div>)}
        else{

       

return(
      <div style={{"marginTop":"100px"}}>
        <div className="container mt-5">
            <div className="mt-5">
                <div className="mt-5">
                      <table className="table table-striped mt-5 table-dark text-center ">
                            <thead className="bg-light">
                                <tr>
                                      <th scope="col">ID</th>
                                      <th scope="col">Name</th>
                                      <th scope="col">Author</th>
                                      <th scope="col">Gender</th>
                                      <th scope="col">Image</th>
                                      <th scope="col">Link</th>
                                      <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                    
                                  {data.map(
                                    (data)=>(
                                        <tr className="">
                                            <th scope="row">{data.id}</th>
                                            <th>{data.name}</th>
                                            <th>{data.author}</th>
                                            <th>{data.description}</th>
                                            <th>
                                                <img className="rounded mx-auto d-block img-fluid" width="100px" src={data.img} alt={data.img} /></th>
                                            <th>{data.link}</th>
                                            <th>                                        
                                                <div className="btn-group">
                                                  <button onClick={()=>this.loadId(data.id)} state={"id"} className="btn btn-warning">Update</button>
                                                  <button type="button" className="btn btn-danger" onClick={()=>this.deleteData(data.id)}>Delete</button>
                                                </div>
                                            </th>
                                                    
                                        </tr>
                                            )
                                            )
                                  }


                                      
                            </tbody>
                      </table>
                </div>
            </div>
        </div>
      </div>


)
}
    }
}
