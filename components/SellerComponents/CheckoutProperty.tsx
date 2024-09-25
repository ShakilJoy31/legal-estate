import React, { useEffect, useState } from 'react';
import SellProperty from './SellProperty';
import { SellerAPI } from '@/APIcalling/sellerAPI';

const CheckoutProperty = () => {
    const [propertiesToBeSold, setPropertiesToBeSold] = useState<string[]>([]); 
    useEffect(()=> {
        SellerAPI.handleGetSellerPropertiesFromDB().then(res => {
            console.log(res);
            setPropertiesToBeSold(res)
        })
    },[])
    return (
        <div>

            {/* <div style={styles.card}>
                <img src={image} alt={propertyName} style={styles.image} />
                <div style={styles.content}>
                    <h2 style={styles.title}>{propertyName}</h2>
                    <p><strong>Price:</strong> ${price}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Bedrooms:</strong> {bedrooms}</p>
                    <p><strong>Bathrooms:</strong> {bahtrooms}</p>
                    <p><strong>Size:</strong> {size} sq ft</p>
                    <p><strong>Year Built:</strong> {year}</p>
                    <p><strong>Type:</strong> {propertyType}</p>
                    <p><strong>Status:</strong> {status}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Contact:</strong> {contactNumber}</p>
                </div>
            </div> */}
        </div>
    );
};

// Simple styles for the card
// const styles: React.CSSProperties = {
//     card: {
//         display: 'flex',
//         flexDirection: 'column' as 'column',  // Ensure it's a valid FlexDirection type
//         borderRadius: '10px',
//         overflow: 'hidden',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         maxWidth: '350px',
//         margin: '20px',
//         backgroundColor: '#fff',
//     },
//     image: {
//         width: '100%',
//         height: '200px',
//         objectFit: 'cover',
//     },
//     content: {
//         padding: '20px',
//     },
//     title: {
//         margin: '0 0 10px 0',
//         fontSize: '24px',
//         color: '#333',
//     },
// };

export default CheckoutProperty;
