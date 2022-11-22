//si pongo react, {component puedo solo poner component}
import React, {Component}from "react";



export default class Post extends Component{

    constructor(props){
        super(props)

        this.state={
            name:"",
            author:"",
            description:"",
            img:"",
            link:""
         }
    }
//this is o handle the info in the inputs and change the information they have
    changeData= (e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({ state})
    }

    // this is to handle the info of the form when you click on submit
    dataSent= (e)=>{
   
//this is to prevent the page load before you send the info 
        e.preventDefault();

           alert('Your book was save successfully');
      window.location = '/home';
        const{name,author,description,img,link}=this.state; 
        console.log(name);
        console.log(author);
        console.log(description);
        console.log(img);
        console.log(link);

        var dataToSend={
            name:name,
            author:author,
            description:description,
            img:img,
            link:link
        }

        let config={
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dataToSend)
        }


        fetch(`http://127.0.0.1:8000/api/products/`,config)
        
        .then(resp=>resp.json())
        .then((dataResp)=>{
            
         console.log(dataResp);
         
        
    })
    .catch(console.log)

    }

    
    render(){  
        const{name,author,description,img,link}=this.state; 
        return(
                <>
               <div className="container bg-light" style={{"marginTop":"150px"}}>
                <form onSubmit={this.dataSent}>
                    
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Name</label>
                      <input type="text" onChange={this.changeData} value={name} className="form-control" name="name" id="name" placeholder="Book name"  aria-describedby="fileHelpId" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Author</label>
                      <input type="text" onChange={this.changeData} value={author} className="form-control" name="author" id="author" placeholder="Book author"  aria-describedby="fileHelpId" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Description</label>
                      <input type="text" onChange={this.changeData} value={description}  className="form-control" name="description" id="description" placeholder="Insert a description"  aria-describedby="fileHelpId" />
                    </div>


                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Image</label>
                      <input type="text" onChange={this.changeData} value={img}   className="form-control" name="img" id="img" placeholder=""  aria-describedby="fileHelpId" />
                      <img className="rounded mx-auto d-block img-fluid mt-3" width="100px" src={img} alt="" />
                    </div>


                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Link</label>
                      <input type="text" onChange={this.changeData} value={link}  className="form-control" name="link" id="link" placeholder="insert Link here "  aria-describedby="fileHelpId" />
                    </div>

                    <br />
                 <button  className="btn btn-dark">insertar nuevo libro</button>
                 <br />

                 </form>

                    


               </div>
                </>
)
}
}