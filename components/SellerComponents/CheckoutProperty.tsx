import React, { useEffect, useState } from 'react';
import SellProperty from './SellProperty';
import { SellerAPI } from '@/APIcalling/sellerAPI';
import { ISellerPropertyToSell } from '@/APIcalling/userInterface';

const CheckoutProperty = () => {
    const [properties, setProperties] = useState<ISellerPropertyToSell[]>([]);
    const [propertiesToBeSold, setPropertiesToBeSold] = useState<ISellerPropertyToSell[]>([]);
    const [status, setStatus] = useState<string>('All');

    useEffect(() => {
        SellerAPI.handleGetSellerPropertiesFromDB().then(res => {
            setProperties(res.data);
            setPropertiesToBeSold(res.data);
        });
    }, []);

    useEffect(()=> {
        if (status === 'All') {
            setPropertiesToBeSold(properties);
        } else if (status === 'For Sell') {
            const sellableProperty = properties.filter(sell => sell.status === 'For Sell');
            setPropertiesToBeSold(sellableProperty);
        } else {
            const rentableProperty = properties.filter(rent => rent.status === 'For Rent');
            setPropertiesToBeSold(rentableProperty);
        }
    },[status])



    console.log(status)
    return (
        <div>

            {
                propertiesToBeSold.length < 1 ? <div className='w-full h-full mt-12'>
                    <span className="loading loading-bars loading-lg flex justify-center items-center"></span>
                </div> : <div>

                    <div>
                        <div className='grid md:flex justify-between items-center my-4'>

                            <div className='flex gap-x-2'>
                                <input onChange={(e) => setStatus(e.target.value)} value='All' type="radio" name="radio-2" className="radio radio-warning" checked={status === 'All'} />
                                <h1 className=''>All</h1>
                            </div>

                            <div className='flex gap-x-2'>
                                <input onChange={(e) => setStatus(e.target.value)} value='For Sell' type="radio" name="radio-2" className="radio radio-warning" />
                                <h1 className=''>For Sale</h1>
                            </div>

                            <div className='flex gap-x-2'>
                                <input onChange={(e) => setStatus(e.target.value)} value='For Rent' type="radio" name="radio-2" className="radio radio-warning" />
                                <h1 className=''>For Rent</h1>
                            </div>

                        </div>
                    </div>


                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4'>
                        {
                            propertiesToBeSold.map((property: any, index: number) => <div key={index} className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img className='h-full'
                                        src={property.image[0]}
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{property.propertyName}</h2>
                                    <p>{property.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Explore</button>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>

            }

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
