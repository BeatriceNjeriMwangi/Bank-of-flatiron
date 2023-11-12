import React, {useState} from "react";

function Form(){
    // const [formData, newFormData] = useState({
    //     category: "",
    //     description: "",
    //     amount: "",
    //     date: ""
    // })
    
    return(
        <div>
            <label>Date</label>
            <input type="date"
            name="date"/>
        </div>
    )
    }
export default Form;