import React from "react"

function FormComponent(props) {
    return (
      <main>
        <form>
            <input
            name="firstName"
            value={props.firstName}
            onChange={props.handleChange}
            placeholder="First Name"
            />
            <br />
            <input
            name="lastName"
            value={props.lastName}
            onChange={props.handleChange}
            placeholder="Last Name"
            />
            <br />
            <input
            type="number"  
            value={props.age}
            name="age"
            placeholder="Age"
            onChange={props.handleChange}
            />
            <br />

            <label>
            <input
                type="radio"
                name="gender"
                value="male"
                checked={props.gender === "male"}
                onChange={props.handleChange}
            /> Male
            </label>
            <br />
            <label>
            <input
                type="radio"
                name="gender"
                value="female"
                checked={props.gender === "female"}
                onChange={props.handleChange}
            /> Female
            </label> 

            <label>
            <input Location />
            <select
                value={props.location}
                name="location"
                onChange={props.handleChange}
            >
                <option value="">---Please choose---</option>
                <option value="perugia">Perugia</option>
                <option value="phiPhi">Phi Phi</option>
                <option value="ithaca">Ithaca</option>
            </select>
            </label>
            <br />
            <label>
            <input
            type="checkbox"
            name="isVeg"
            checked={props.isVeg}
            onChange={props.handleChange}
            /> Is Vegetarian?
        </label>
        <br />
        <label>
            <input
            type="checkbox"
            name="isKosher"
            checked={props.isKosher}
            onChange={props.handleChange}
            /> Is Kosher?
        </label>
        <label>
            <input
            type="checkbox"
            name="isLF"
            checked={props.isLF}
            onChange={props.handleChange}
            /> Is Lactose Free?
        </label>
        <br />
        <button>Submit</button>
        </form>
        <hr />
        <h2>Entered Information:</h2>
        <p>Your name: {props.firstName} {props.lastName}</p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.location}</p>
        <p>Your dietary restrictions:</p>
        <p>Veg: {props.isVeg ? "Yes" : "No"}</p>
        <p>Kosher: {props.isKosher ? "Yes" : "No"}</p>
        <p>LF: {props.isLF ? "Yes" : "No"}</p>
    </main>
   )
}

export default FormComponent