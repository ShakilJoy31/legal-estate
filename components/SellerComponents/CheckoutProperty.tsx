import React, { useEffect, useState } from 'react';
import { SellerAPI } from '@/APIcalling/sellerAPI';
import { ISellerPropertyToSell, ISellerPropertyToUpdate } from '@/APIcalling/userInterface';
import CommunityComponentCSS from '../../style/Home.module.css';
import { useRouter } from 'next/navigation';

const CheckoutProperty = () => {
    const router = useRouter();
    const [properties, setProperties] = useState<ISellerPropertyToSell[]>([]);
    const [propertiesToBeSold, setPropertiesToBeSold] = useState<ISellerPropertyToSell[]>([]);
    const [status, setStatus] = useState<string>('All');

    const [singleProperty, setSingleProperty] = useState<ISellerPropertyToSell | undefined>();

    useEffect(() => {
        SellerAPI.handleGetSellerPropertiesFromDB().then(res => {
            // Only approved post will be shown here...............................................
            const pendingProperties = res.data.filter((property: ISellerPropertyToUpdate) => property.condition === 'approved');
            setProperties(pendingProperties);
            setPropertiesToBeSold(pendingProperties);
        });
    }, []);

    useEffect(() => {
        if (status === 'All') {
            setPropertiesToBeSold(properties);
        } else if (status === 'For Sell') {
            const sellableProperty = properties.filter(sell => sell.status === 'For Sell');
            setPropertiesToBeSold(sellableProperty);
        } else {
            const rentableProperty = properties.filter(rent => rent.status === 'For Rent');
            setPropertiesToBeSold(rentableProperty);
        }
    }, [status])

    return (
        <div>
            {
                singleProperty ?<div className="container mx-auto px-4 py-8">
                <div className="">
                    <p className='text-xl font-bold text-red-600 mb-4 cursor-pointer' onClick={()=> setSingleProperty(undefined)}>{"<--"} Back</p>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            className="w-full h-hull object-cover"
                            src={singleProperty.image[0]}
                            alt={singleProperty.propertyName}
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">{singleProperty.propertyName}</h2>
                            <p className="text-gray-600 mb-4">{singleProperty.description}</p>
            
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                                <div>
                                    <span className="font-bold">Location:</span> {singleProperty.location}
                                </div>
                                <div>
                                    <span className="font-bold">Price:</span> ${singleProperty.price}
                                </div>
                                <div>
                                    <span className="font-bold">Bedrooms:</span> {singleProperty.bedrooms}
                                </div>
                                <div>
                                    <span className="font-bold">Bathrooms:</span> {singleProperty.bahtrooms}
                                </div>
                                <div>
                                    <span className="font-bold">Size:</span> {singleProperty.size} sq.ft.
                                </div>
                                <div>
                                    <span className="font-bold">Year Built:</span> {singleProperty.year}
                                </div>
                                <div>
                                    <span className="font-bold">Property Type:</span> {singleProperty.propertyType}
                                </div>
                                <div>
                                    <span className="font-bold">Status:</span> {singleProperty.status}
                                </div>

                               

                            </div>
            
                            <div className="mb-4">
                                <p className="font-bold text-gray-700">Contact Information:</p>
                                <p>{singleProperty.contactNumber}</p>
                            </div>
            
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={singleProperty.propertyOwner.photo}
                                    alt={singleProperty.propertyOwner.name}
                                />
                                <div>
                                    <p className="font-bold text-gray-900">{singleProperty.propertyOwner.name}</p>
                                    <p className="text-gray-600">{singleProperty.propertyOwner.email}</p>
                                </div>
                            </div>

                            <div className='flex justify-end'>
                                <button className={`btn btn-md border border-black w-32 normal-case ${CommunityComponentCSS.orderExtraItemButton}`}>Buy Now</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
             : <div>

                    {
                        propertiesToBeSold.length < 1 ? <div className='w-full h-full mt-12'>
                            <span className="loading loading-bars loading-lg flex justify-center items-center"></span>
                        </div> : <div>

                            <div>
                                <div className='grid md:flex justify-between items-center my-4'>

                                    <div className='flex gap-x-2'>
                                        <input onChange={(e) => setStatus(e.target.value)} value='All' type="radio" name="radio-2" className="radio radio-warning" checked={status === 'All'} />
                                        <h1 className='text-black font-bold'>All</h1>
                                    </div>

                                    <div className='flex gap-x-2'>
                                        <input onChange={(e) => setStatus(e.target.value)} value='For Sell' type="radio" name="radio-2" className="radio radio-warning" />
                                        <h1 className='text-black font-bold'>For Sale</h1>
                                    </div>

                                    <div className='flex gap-x-2'>
                                        <input onChange={(e) => setStatus(e.target.value)} value='For Rent' type="radio" name="radio-2" className="radio radio-warning" />
                                        <h1 className='text-black font-bold'>For Rent</h1>
                                    </div>

                                </div>
                            </div>


                            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4'>
                                {
                                    propertiesToBeSold.map((property: ISellerPropertyToSell, index: number) => <div key={index} className="card bg-base-100 image-full w-96 shadow-xl">
                                        <figure>
                                            <img className="h-full w-full object-cover"
                                                src={property.image[0]}
                                                alt={property.propertyName} />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-xl font-semibold">{property.propertyName}</h2>

                                            <p className="mb-2">{property.description}</p>

                                            <div className="mb-2">
                                                <span className="font-bold">Location:</span> {property.location}
                                            </div>

                                            <div className="mb-2">
                                                <span className="font-bold">Price:</span> ${property.price}
                                            </div>

                                            <div className="mb-2 flex items-center justify-between gap-x-2">
                                                <p className='border border-white flex justify-between px-2'><span className="font-bold">Bedrooms:</span> {property.bedrooms}</p>
                                                <p className='border border-white flex justify-between px-2'><span className="font-bold">Bathrooms:</span> {property.bahtrooms}</p>

                                            </div>

                                            <div className="mb-2">
                                                <span className="font-bold">Size:</span> {property.size} sq.ft.
                                            </div>

                                            <div className="mb-2">
                                                <span className="font-bold">Year Built:</span> {property.year}
                                            </div>

                                            <div className="mb-2">
                                                <span className="font-bold">Property Type:</span> {property.propertyType}
                                            </div>

                                            <div className="mb-2">
                                                <span className="font-bold">Status:</span> {property.status}
                                            </div>

                                            <div className="mb-2">
                                                <span className="font-bold">Contact:</span> {property.contactNumber}
                                            </div>

                                            <div className="mb-4">
                                                <div className='flex gap-x-2 items-center'>
                                                    <img className="h-8 w-8 rounded-full"
                                                        src={property.propertyOwner.photo}
                                                        alt={property.propertyName} />

                                                    <div>
                                                        <p className='font-bold'>{property.propertyOwner.name}</p>
                                                        <p>{property.propertyOwner.email}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-actions justify-end">
                                                <button onClick={() => {
                                                    setSingleProperty(property)
                                                }} className={`btn border-0 btn-md w-full normal-case ${CommunityComponentCSS.orderExtraItemButton}`}>Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }

                            </div>

                        </div>

                    }

                </div>
            }



        </div>

    );
};

export default CheckoutProperty;
