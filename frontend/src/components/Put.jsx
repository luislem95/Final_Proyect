//si pongo react, {component puedo solo poner component}
import React, {Component}from "react";
import {
 
} from "react-router-dom";
import axios from "axios";






export default class Post extends Component{

  constructor(props){
    super(props);

    this.state={
                  dataCharge:false,
                  book:[]
                }
    
                    }

//this is to change the information in the inputs and also to update the info into the database
changeData= (e)=>{

  const state=this.state.book;
  state[e.target.name]=e.target.value;
  this.setState({book:state})
  const{id,name,author,description,img,link}=this.state.book;
  console.log(id);
  console.log(name);
  console.log(author);
  console.log(description);
  console.log(img);
  console.log(link);

  var dataToSend={
    id:id,
    name:name,
    author:author,
    description:description,
    img:img,
    link:link,
}

let config={
    method: 'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
  },
    body: JSON.stringify(dataToSend)
}


fetch(`http://127.0.0.1:8000/api/products/1`,config)

.then(resp=>resp.json())
.then((dataResp)=>{
    
  console.log(dataResp);

})

}

dataSent=(e)=>{
    e.preventDefault();
    console.log("the form has been sent...")
    alert('Congratulations you have successfully updated your book');
    window.location = '/home';

}
// here is where I receive the id and show the info in to the inputs 
    componentDidMount(){    
     let libroId= this.props.match.params.id;
     let getUrl=`http://127.0.0.1:8000/api/products/`;
     let url= getUrl+libroId;
     axios.get(url)
     .then(response =>{
      
      this.setState({
        dataCharge:true,
        book:response.data
      })
      
     }).catch(console.log)
      
   
    
  }



 


    
    render(){  
      const{dataCharge, book}=this.state;
                if(!dataCharge)
                {
                  return( <div><h1>Loading...</h1></div> );
              }else{
      
        return(
                <>
                <div className="container ">
                  <h3 className="mb-5" style={{"marginTop":"150px"}}>books</h3>
               <div className="container bg-light mb-5" >
                <form onSubmit={this.dataSent}>
 

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">ID</label>
                      <input type="text" value={book.id} onChange={this.changeData} readOnly className="form-control" name="id" placeholder={this.state.id} id="id"   aria-describedby="fileHelpId" />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Name</label>
                      <input type="text" onChange={this.changeData} value={book.name}   className="form-control" name="name" id="name"    aria-describedby="fileHelpId" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Author</label>
                      <input type="text" onChange={this.changeData} value={book.author}   className="form-control" name="author" id="author" placeholder="Book author"  aria-describedby="fileHelpId" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Description</label>
                      <input type="text" onChange={this.changeData} value={book.description}    className="form-control" name="description" id="description" placeholder="Insert a description"  aria-describedby="fileHelpId" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Image</label>
                      <input type="text" onChange={this.changeData} value={book.img}   className="form-control" name="img" id="img" placeholder=""  aria-describedby="fileHelpId" />
                      <img className="rounded mx-auto d-block img-fluid mt-3" width="100px" src={book.img} alt="" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Link</label>
                      <input type="text" onChange={this.changeData}  value={book.link}   className="form-control" name="link" id="link" placeholder="insert Link here "  aria-describedby="fileHelpId" />
                      
                    </div>

                    <br />
                 <button type="submit"  className="btn btn-dark">Update </button>
                 <br />

                 </form>
                 </div>
                 </div>
            </>
        )
        }
      }
      
      }