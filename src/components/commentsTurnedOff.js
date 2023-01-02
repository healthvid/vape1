import React from "react";
const CommentsTurnedOff = ()=>{
    return (
        <div className="center" id='center'>
            <div className="border border-3 border-secondary comments-border container">
                <div className="row">
                    <div className="col align-self-center fs-2 pe-2 ps-2">Comments are turned off. </div>
                    <div className="col align-self-start fs-6 pe-2 ps-2">
                        Over the years, our comment section has seen a great deal of misinformation about various health issues, uncivil commentaries, and personal attacks. For that reason, we have turned off the comment section to stop the spread of misinformation and promote a more civil, companionate online environment.  
                        Users who have questions or are looking for guidance can send a direct message, and we will respond as soon as possible. 
                    </div>
                </div>
            </div>
       
        </div>
    )
    
};

export default CommentsTurnedOff;