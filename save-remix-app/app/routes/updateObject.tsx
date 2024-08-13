import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        firstname: 'Barbara',
        lastname: 'Heowort',
        email: 'bheoworth',
        Profile: "/images/Green.jfif"
    });

//object spread Syntax
    function handleFirstNameChange(e) {
        setPerson({
        ...person,// Copy the old fields
            firstName: e.target.value
        });
}
function handleLastNameChange(e) {
    setPerson({
    ...person,
    lastName: e.target.value
    });
}
function handleEmailChange(e) {
    setPerson({
    ...person,
    email: e.target.value
    });
}
function handleProfileChange(e) {
    setPerson({
    ...person,
    Profile: e.target.value
 });
}

return (
    <>
        <label>
            First name:
            <input
            className="rounded-md border mb-2 w-1/4 h-8 block w-full"
                value={person.firstName}
                onChange={handleFirstNameChange}
                />
        </label>
        <label>
            Last name:
            <input
                value={person.lastName}
                onChange={handleLastNameChange}
                />
        </label>
        <label>
            Email name:
            <input
                value={person.email}
                onChange={handleEmailChange}
                />
        </label>
        <label>
            Profile name:
            <input
                value={person.Profile}
                onChange={handleProfileChange}
                />
        </label>
        <label>
            Change Profile:
            <select
               // value=//{myTemplate}
                onChange={e => setPerson({
                    ...person,
                    Profile: e.target.value
                 })
                }
                name= "myTemplate" className="border-blue-200"
            >
                
                <option value="https://static.naewna.com/uploads/news/source/505439.jpg">APPLE</option>
                <option value="https://news.mthai.com/app/uploads/2019/12/15-05-19-20.jpg">BANANA</option>
             </select>   
        </label>
        <p>
            {person.firstName}{''}
            {person.lastName}{''}
            ({person.email})
            <img
            src= {person.Profile}
            />
        </p>
    </>
)}