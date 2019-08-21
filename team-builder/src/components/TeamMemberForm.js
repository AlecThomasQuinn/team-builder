import React, { useState } from "react";

const TeamMemberForm = function(){
    const [tmAttributes, setTmAttributes] = useState({ 
        name:'',
        title:''
    });

    return(
        <form >
            <label htmlFor='name'>New Team Member Name</label>
            <input
            type='text'
            name='name'
            value={tmAttributes.name}
            />
            <label htmlFor='title'>New Team Member Name</label>
            <input
            type='text'
            name='title'
            value={tmAttributes.title}
            />
        <button type='submit'>Add Team Member</button>
        </form>
    );
}


export default TeamMemberForm;
