import { useState } from "react"
export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "India",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        comments: false,
        candidates: false,
        offers: false,
        notifications: "",
        text: "", 
    })

    console.log(formData);

    function handleChange(event) {
        const { name, value, checked, type } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,    //copy all the previous data
                [name]: type === "checkbox" ? checked : value     //only change the data for new input
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("Printing Form Data:")
        console.log(formData);
    }

    return (
        <form onSubmit={submitHandler} className="bg-white text-sm p-10 w-[70%] flex flex-col justify-center items-center gap-4 my-10 rounded-md">
            <h1 className="font-bold text-4xl mb-4">FORM</h1>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="firstName" className="font-semibold">First Name</label>
                <input 
                className="w-full h-9 rounded-md p-2 border-2 outline-none" 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={formData.firstName} 
                placeholder="Vaibhav" 
                onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="lastName" className="font-semibold">Last Name</label>
                <input 
                className="w-full h-9 rounded-md p-2 border-2 outline-none" 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={formData.lastName} 
                placeholder="Chopra" 
                onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">Email Id</label>
                <input 
                className="w-full h-9 rounded-md p-2 border-2 outline-none" 
                type="text" 
                name="email" 
                id="email" 
                value={formData.email} 
                placeholder="chopravaibhav953@gmail.com" 
                onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="country" className="font-semibold">Country</label>
                <select className="w-full h-9 rounded-md pl-2 border-2 outline-none" 
                onChange={handleChange} 
                name="country" 
                id="country" 
                value={formData.country}>
                    <option value="Australia">Australia </option>
                    <option value="Boston">Boston </option>
                    <option value="Chicago">Chicago </option>
                    <option value="France">France </option>
                    <option value="India">India </option>
                    <option value="London">London </option>
                    <option value="Mauritious">Mauritious </option>
                    <option value="New York">New York </option>
                </select>
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="street" className="font-semibold">Street Address</label>
                <input 
                className="w-full h-9 rounded-md p-2 border-2 outline-none" 
                type="text" 
                name="street" 
                id="street" 
                value={formData.street} 
                placeholder="1234 Main St" 
                onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="street" className="font-semibold">City</label>
                <input 
                className="w-full h-9 rounded-md p-2 border-2 outline-none" 
                type="text" 
                name="city" 
                id="city" 
                value={formData.city} 
                placeholder="Amritsar" 
                onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="street" className="font-semibold">State / Province</label>
                <input 
                className="w-full h-9 rounded-md p-2 border-2 outline-none" 
                type="text" 
                name="state" 
                id="state" 
                value={formData.state} 
                placeholder="Punjab" 
                onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="street" className="font-semibold">Postal Code</label>
                <input 
                className="w-full h-9 rounded-md p-2 border-2 outline-none" 
                type="text" 
                name="postalCode" 
                id="postalCode" 
                value={formData.postalCode} 
                placeholder="143001" 
                onChange={handleChange} />
            </div>

            <fieldset className="w-full flex flex-col gap-3">
                <legend className="font-semibold mb-3">By Email</legend>
                
                <div className="w-full flex gap-3 items-start">
                    <input 
                    type="checkbox" 
                    className="mt-3 outline-none" 
                    onChange={handleChange} 
                    name="comments" 
                    id="comments" 
                    checked={formData.comments} />
                    <div className="flex flex-col p-1">
                        <label htmlFor="comments" className="font-semibold" >Comments</label>
                        <p className="mt-[-1px] text-[0.8rem] opacity-50 ">Get notified when someone adds a comment on a post.</p>
                    </div>
                </div>

                <div className="w-full flex gap-3 items-start">
                    <input 
                    type="checkbox" 
                    className="mt-3 outline-none" 
                    onChange={handleChange} 
                    name="candidates" 
                    id="candidates" 
                    checked={formData.candidates} />
                    <div className="flex flex-col p-1">
                        <label htmlFor="candidates" className="font-semibold" >Candidates</label>
                        <p className="mt-[-1px] text-[0.8rem] opacity-50 ">Get notified when a candidate applies for a job.</p>
                    </div>
                </div>

                <div className="w-full flex gap-3 items-start">
                    <input 
                    type="checkbox" 
                    className="mt-3 outline-none" 
                    onChange={handleChange} 
                    name="offers" 
                    id="offers" 
                    checked={formData.offers} />

                    <div className="flex flex-col p-1">
                        <label htmlFor="offers" className="font-semibold" >Offers</label>
                        <p className="mt-[-1px] text-[0.8rem] opacity-50 ">Get notified when some candidate accepts/rejects an offer.</p>
                    </div>
                </div>
            </fieldset>



            <fieldset className="w-full flex flex-col">
                <legend className="font-semibold ">Push Notifications</legend>
                <p className="text-[0.8rem] opacity-50 ">Get notified when someone adds a comment on a post.</p>
                
                <div className="flex gap-3 items-center my-3">
                    <input 
                    type="radio" 
                    className="w-3 h-3 outline-none" 
                    onChange={handleChange} 
                    name="notifications" 
                    id="everything" 
                    value="everything" 
                    checked={formData.notifications === "everything"} />
                    <label htmlFor="everything" className="font-semibold" >Everything</label>
                </div>

                <div className="flex gap-3 items-center my-3">
                    <input 
                    type="radio" 
                    className="w-3 h-3 outline-none" 
                    onChange={handleChange} 
                    name="notifications" 
                    id="same as email" 
                    value="same as email" 
                    checked={formData.notifications === "same as email"} />
                    <label htmlFor="same as email" className="font-semibold" >Same as email</label>
                </div>

                <div className="flex gap-3 items-center my-3">
                    <input 
                    type="radio" 
                    className="w-3 h-3 outline-none" 
                    onChange={handleChange} 
                    name="notifications" 
                    id="no push notifications" 
                    value="no push notifications" 
                    checked={formData.notifications === "no push notifications"} />
                    <label htmlFor="no push notifications" className="font-semibold" >No push notifications</label>
                </div>

            </fieldset>

            <fieldset className="w-full flex flex-col">
                <legend className="font-semibold">Ask any doubts</legend>
                <textarea 
                className="w-full h-auto rounded-md p-2 border-2 my-2 outline-none" 
                name="text" 
                value={formData.text} 
                placeholder="Enter your comments..." 
                onChange={handleChange} />
            </fieldset>
            
            <button type="submit" className="flex self-start justify-center items-center font-semibold p-2 my-4 px-4 rounded-sm bg-blue-500 text-white">Submit</button>
        </form>
    )
}