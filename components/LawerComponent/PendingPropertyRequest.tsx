'use client'

import React, { useEffect, useState } from 'react';

import CommunityComponentCSS from '../../style/Home.module.css';
import HomeComponentCss from '../../style/ComponentStyle.module.css';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { SellerAPI } from '@/APIcalling/sellerAPI';
import { ISellerPropertyToUpdate } from '@/APIcalling/userInterface';
import Image from 'next/image';
import { LawerAPI } from '@/APIcalling/lawerAPI';

const PerndingPropertyRequest: React.FC = () => {
    const [properties, setProperties] = useState<ISellerPropertyToUpdate[]>([]);
    useEffect(() => {
        SellerAPI.handleGetSellerPropertiesFromDB().then(res => {
            // Filter the pending posts (properties with condition 'pending')
            const pendingProperties = res.data.filter((property: ISellerPropertyToUpdate) => property.condition === 'pending');
            setProperties(pendingProperties);
        });
    }, []);
    console.log(properties);
    return (
        <div style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116))",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
        }} className='mt-[20px] w-full'>
            <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                    <thead className="text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium ">SL</th>
                            <th className="px-6 py-3 text-left text-sm font-medium ">Property Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium ">Price</th>
                            <th className="px-6 py-3 text-left text-sm font-medium ">Type</th>
                            <th className="px-6 py-3 text-left text-sm font-medium ">Size</th>
                            <th className="px-6 py-3 text-left text-sm font-medium ">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-medium ">Building Year</th>
                            <th className="px-6 py-3 text-left text-sm font-medium ">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {
                            properties?.map((property, index) => <tr key={index}>
                                <td className="px-6 py-4 text-sm ">{index + 1}</td>
                                <td className="px-6 py-4 text-sm "><div className='flex gap-x-2 items-center'>
                                    <img
                                        className="w-[60px] h-[45px] rounded-sm"
                                        src={property?.image[0]}
                                        alt=""
                                    />
                                    <span>{property?.propertyName}</span>
                                </div></td>
                                <td className="px-6 py-4 text-sm ">{property?.price}</td>
                                <td className="px-6 py-4 text-sm ">{property?.propertyType}</td>
                                <td className="px-6 py-4 text-sm ">{property?.size}</td>
                                <td className="px-6 py-4 text-sm ">{property?.status}</td>
                                <td className="px-6 py-4 text-sm ">{property?.year}</td>
                                <td className="px-6 py-4 text-sm ">

                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-x-4">
                                            {/* Approved Button */}
                                            <button
                                                className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all"
                                                onClick={() => {
                                                    LawerAPI?.handleGetAndUpdateSellerProperty({id: property?._id, condition: 'approved'})
                                                    window?.location?.reload();
                                                }}
                                            >
                                                Approved
                                            </button>

                                            {/* Reject Button */}
                                            <button
                                                className="bg-red-500 text-white font-medium py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all"
                                                onClick={() => {
                                                    LawerAPI?.handleGetAndUpdateSellerProperty({id: property?._id, condition: 'rejected'})
                                                    window?.location?.reload();
                                                }}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </td>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PerndingPropertyRequest;
