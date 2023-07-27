import React from "react";
const students =[ {
    name: "Mais",
    attend: false
},
{
    name :"Nada",
    attend:false
        
    },
    {
        name: "athraa",
        attend:true
    },
    {
        name: "Zahraa",
        attend:true
    }
]
function Attendance() {
    return (
        <div>
            {students.map((student) => {
                if (student.attend === true) {
                    return <li>
                            <p className="name">{student.name}</p>
                            <p className="studentattend">is here.</p>
                        </li>
                }
                
                if(student.attend === false){
                    return <li>
                            <p className="name2">{student.name}</p>
                            <p className="studentattend2">is not here.</p>
                        </li>
                }
            })}
                    
                
                    
                   
            
        </div>
    );
}
export default Attendance;
