import { getDefaultNormalizer } from "@testing-library/dom"
import React, { useContext, useEffect, useState } from "react"
import { WrapperContext } from "../index"
import { getfile,upload,getdatas } from "../interaction"

export const Drive = (props)=>{
    const {user,token} = useContext(WrapperContext)
    const [files,setfiles]=useState([]);
    const [filename,setfile]=useState("");

    const getdata=(file)=>{
        getdatas(token,file)
        .then((data)=>{
            
            if(data)
            {
                console.log(data);
               alert(data);   
            }
            else
            {
                console.log("no files found")
            }        
        })
        .catch((error)=>{
            //setMessage("Unsuccessful Login check Username and Password");
        })
    }

    useEffect(()=>{
        console.log("user::::",user)
    },[])

    const listfile=()=>{

        getfile(token)
        .then((data)=>{
             const {message,document}=data;
             if(document)
             {
                 setfiles(document);
                 console.log(files,document);
                // alert(message);   
             }
             else
             {
                 console.log("no files found")
                 //setcustomMessage(message);
             }        
         })
         .catch((error)=>{
             //setMessage("Unsuccessful Login check Username and Password");
         })

    }

    const uploadfile=()=>{

        console.log(filename);
        upload(token,filename)
        .then((data)=>{
            const {message}=data;
            if(message)
            {
               // setfiles(document);
                console.log(message);
               alert(message);   
            }
            else
            {
                console.log("no files found")
                //setcustomMessage(message);
            }        
        })
        .catch((error)=>{
            //setMessage("Unsuccessful Login check Username and Password");
        })
    }
 
    return(
        <>
          <div className="container "style={{backgroundColor: "white"}} >
            <ul className="nav justify-content-end">
               <li className="nav-item">
                   <form>
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile04" placeholder="choose file" onChange={(e)=>setfile(e.target.files[0])}/>
                   
                    <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                </div>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={uploadfile}>Upload</button>
                </div>
            </div>
            {{filename}?<span>{filename.name}</span>:<></>}
            </form>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-link" style={{color: "green"}} onClick={listfile}>List Files</button>
            </li>
            </ul>
            <div className="row">
                <div offset="col-2">
                    <div className="row">
                        <div className="col-12">
                        {files.map((data,index)=>(
                            <div className="row" key={index}>
                                <span className="col-4 p-2">
                                    <img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/File_alt_font_awesome.svg/512px-File_alt_font_awesome.svg.png" alt="File" />
                                   
                                    <span>{data.filename}</span>
                        <button type="button" className="btn btn-link"   onClick={()=>getdata(data.filename)}>download</button>
                     </span></div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}