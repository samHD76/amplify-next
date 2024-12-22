// Filename - App.js file 

import { Alert } from '@material-tailwind/react';
import { Background, StartValueType } from '@tsparticles/engine';
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(outputs);
const client = generateClient<Schema>();

export const Profileform = () => {
    const [profiles, setProfiles] = useState<Array<Schema["Profile"]["type"]>>([]);

    const [name, setName] = useState('');
   // const [name, setName] = useState <string | undefined>("");

    const [city, setCity] = useState('');
    const [add1, setAdd1] = useState('');
    const [add2, setAdd2] = useState('');
    const [country, setCountry] = useState('');
    const [tel, setTel] = useState('');
    const [errors, setErrors] = useState<any>({});
    const [isFormValid, setIsFormValid] = useState(true);
    const [start,setStart]=useState(true)

    async function listProfile(){
        client.models.Profile.observeQuery().subscribe({
          next: (data_1) => {if(data_1.items.length == 0)  {
            setProfiles([...data_1.items]),
            profiles.map((profile) => (
        profile.name?  setName(profile.name):null,      
        profile.city?  setCity(profile.city):null,
        profile.address1?  setAdd1(profile.address1):null,
        profile.address2?  setAdd2(profile.address2):null,
        profile.country?  setCountry(profile.country):null,
        profile.tel?  setTel(profile.tel):null
            )
            )}
         
          }})
        }
     
      useEffect(() => {
        listProfile();},[]
    );
 

    useEffect(() => {
        
       if (!start) validateForm();
    }, [name , city,add1, add2, country, tel, start]);
    // Validate form
    const validateForm = () => {
      
     let    errors: {
            name?: any,
            add1?: any,
            add2?: any,
            tel?: any,
            city?: any,
            country?: any,
          } = {};
        if (!name || name.length<3) {
            errors.name = 'Name is required.';
        }
        if (!add1) {
            errors.add1 = 'add1 is required.';
        }
        if (!tel) {
            errors.tel = 'tel is required.';
        }
        if (!city) {
            errors.city = 'city is required.';
        }
        if (!country) {
            errors.country = 'country is required.';
        }
       
       

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0 && ! start);
    };

    function createProfile(Name:any,Add1:any,Add2:any,Tel:any,City:any,Country:any) {
        client.models.Profile.create({
         // name: window.prompt("Name content"),
         name:Name,
         address1:Add1,
         address2:Add2,
         tel:Tel,
         city:City,
         country:Country
        });
      }

    // Submit
    const handleSubmit = () => {
        setStart(false);
       if(!name || !tel || !add1 || !city || !country) 
    
        //if (isFormValid)
             {
          //  console.log('Form submitted successfully!');
            alert("Failed");
        } 
        else {
           // console.log('Form has errors. Please correct them.');
           alert("Success");
            createProfile(name,add1,add2,tel,city,country);

        }
       
    };

    return (
        <div style={styles.container}>
            <div style={styles.form}>
               <label className='flex mt-1'>Name*</label>
                <input
                    style={styles.input}
                    placeholder={name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                { errors.name && <p style={styles.error}>{errors.name}</p>}
               
                <label className='flex mt-1'>Tel*</label>

                <input
                    style={styles.input}
                    placeholder={tel}
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
                { errors.tel && <p style={styles.error}>{errors.tel}</p>}

                <label className='flex mt-1'>Address1*</label>
                <input
                    style={styles.input}
                    placeholder={add1}
                    value={add1}
                    onChange={(e) => setAdd1(e.target.value)}
                />
                { errors.add1 && <p style={styles.error}>{errors.add1}</p>}
                <label className='flex mt-1'>Address2</label>
                <input
                    style={styles.input}
                    placeholder={add2}
                    value={add2}
                    onChange={(e) => setAdd2(e.target.value)}
                />
                { errors.add2 && <p style={styles.error}>{errors.add2}</p>}
               
                <label className='flex mt-1'>City*</label>
                <input
                    style={styles.input}
                    placeholder={city}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                { errors.city && <p style={styles.error}>{errors.city}</p>}
                
                <label className='flex mt-1'>Country*</label>
                <input
                    style={styles.input}
                    placeholder={country}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                { errors.country && <p style={styles.error}>{errors.country}</p>}
                
               <div className='flex mt-5 justify-center items-center'>
                <button
                    style={{ ...styles.button, opacity: isFormValid ? 1 : 0.5 }}
                    disabled={!isFormValid && !start}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: '25px',
        color: "green",
        textAlign: "center",
    },
    subHeading: {
        fontWeight: 'bold',
        fontSize: '25px',
        textAlign: "center",

    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
    },
    input: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        fontSize: '16px',
        transition: 'border-color 0.2s ease',
        backgroundColor:'lightgray'
    },
    button: {
        backgroundColor: 'green',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '12px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '40%',
        transition: 'opacity 0.2s ease',
        
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginLeft:'15px'
    },
};

