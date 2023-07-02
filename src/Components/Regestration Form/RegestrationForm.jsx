import React, { useState } from "react";
import './Style.css'
export default function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const handleNameChange = (event) => {
        setName(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    };

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, mobile: "" }));
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate form data
        const errors = {};
        if (!name) {
            errors.name = "Please enter your name";
        }
        if (!email) {
            errors.email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Please enter a valid email address";
        }
        if (!mobile) {
            errors.mobile = "Please enter your mobile number";
        } else if (!/^[0-9]+$/.test(mobile)) {
            errors.mobile = "Please enter a valid mobile number";
        }
        if (!username) {
            errors.username = "Please enter a username";
        }
        if (!password) {
            errors.password = "Please enter a password";
        }

        // Update errors state and return if there are any errors
        if (Object.keys(errors).length) {
            setErrors(errors);
            return;
        }
        // Save registration data to localStorage and show success message
        const registrationData = { name, email, mobile, username, password };
        localStorage.setItem("registrationData", JSON.stringify(registrationData));
        alert("Registration successful!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                placeholder="Enter your name"
            />
           <p style={{color:"red"}}> {errors.name && <span className="error">{errors.name}</span>}</p>
            <br />
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
                placeholder="Enter your Username"
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your Email"
            />
         <p style={{color:"red"}}>      {errors.email && <span className="error">{errors.email}</span>} </p>
            <br />
            <label htmlFor="mobile">Mobile:</label>
            <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={handleMobileChange}
                required
                placeholder="Enter your Mobile"
            />
         <p style={{color:"red"}}>      {errors.mobile && <span className="error">{errors.mobile}</span>}  </p>
            <br />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Enter your password"
            />
            <br />
            <button type="submit">Register</button>
        </form>
    );
}
