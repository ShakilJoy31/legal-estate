import React, { useEffect, useState } from 'react';
import { SellerAPI } from '@/APIcalling/sellerAPI';
import { ISellerPropertyToSell, ISellerPropertyToUpdate, UserResponseForAdmin,  } from '@/APIcalling/userInterface';
import { FaUsersLine } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { AdminAPI } from '@/APIcalling/adminAPI';
import { MdOutlineDoneOutline } from "react-icons/md";
import { FaHome } from "react-icons/fa";


const AdminComponent = () => {
    const router = useRouter(); 
    const [allUser, setAllUser] = useState<UserResponseForAdmin[]>([]);

    useEffect(() => {
        AdminAPI.getAllUserForAdmin().then(res => {
            setAllUser(res?.data)
        });
    }, []);

    const [properties, setProperties] = useState<ISellerPropertyToUpdate[]>([]);
    const [approvedProperties, setAProperties] = useState<ISellerPropertyToUpdate[]>([]);
    const [rejectedProperties, setRProperties] = useState<ISellerPropertyToUpdate[]>([]);
    useEffect(() => {
        SellerAPI.handleGetSellerPropertiesFromDB().then(res => {
            // Filter the pending posts (properties with condition 'pending')
            const pendingProperties = res.data.filter((property: ISellerPropertyToUpdate) => property.condition === 'pending');
            const approvedProperties = res.data.filter((property: ISellerPropertyToUpdate) => property.condition === 'approved');
            const rejectedProperties = res.data.filter((property: ISellerPropertyToUpdate) => property.condition === 'rejected');
            setProperties(pendingProperties);
            setAProperties(approvedProperties)
            setRProperties(rejectedProperties)
        });
    }, []);

    return (
        <div className='min-h-screen'>
            <h1 className='flex justify-center text-xl lg:text-4xl py-4 text-white'>Welcome to Admin panel</h1>
            {
                allUser.length < 1 ? <div className='w-full h-full mt-12 flex justify-center'>
                    <span className="loading loading-bars loading-lg flex justify-center items-center"></span>
                </div> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div onClick={()=> router.push('/manage-user')} className=" bg-white rounded-md shadow-lg overflow-hidden hover:cursor-pointer">
                       
                        <div className="px-4 py-2 flex justify-between items-center">
                            <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{allUser?.length}</h2>
                            <p className="text-gray-600">Total Users</p>
                            </div>
                            <span><FaUsersLine size={30} color={'black'}></FaUsersLine></span>
                        </div>

                        <div className="px-4 py-2 border-t hover:bg-gray-300 ">
                            <div className="flex justify-center items-center text-xl text-black">
                                <p>Manage User</p>
                            </div>
                        </div>
                    </div>


                    <div onClick={()=> router.push('/manage-property')} className="bg-white rounded-md shadow-lg overflow-hidden hover:cursor-pointer">
                        <div className="px-4 py-2 flex justify-between items-center">
                            <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{properties?.length}</h2>
                            <p className="text-gray-600">Pending Property</p>
                            </div>
                            <span><FaHome size={30} color={'black'}></FaHome></span>
                        </div>

                        <div className="px-4 py-2 border-t hover:bg-gray-300">
                            <div className="flex justify-center items-center text-xl text-black">
                                <p>Manage Pending Property</p>
                            </div>
                        </div>
                    </div>


                    <div onClick={()=> router.push('/manage-approved-property')} className="bg-white rounded-md shadow-lg overflow-hidden hover:cursor-pointer">
                        <div className="px-4 py-2 flex justify-between items-center">
                            <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{approvedProperties?.length}</h2>
                            <p className="text-gray-600">Approved Property</p>
                            </div>
                            <span><MdOutlineDoneOutline size={30} color={'black'}></MdOutlineDoneOutline></span>
                        </div>

                        <div className="px-4 py-2 border-t hover:bg-gray-300">
                            <div className="flex justify-center items-center text-xl text-black">
                                <p>Manage Approved Property</p>
                            </div>
                        </div>
                    </div>


                    <div onClick={()=> router.push('/manage-rejected-property')} className="bg-white rounded-md shadow-lg overflow-hidden hover:cursor-pointer">
                        <div className="px-4 py-2 flex justify-between items-center">
                            <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{rejectedProperties?.length}</h2>
                            <p className="text-gray-600">Reject Property</p>
                            </div>
                            <span><MdOutlineDoneOutline size={30} color={'black'}></MdOutlineDoneOutline></span>
                        </div>

                        <div className="px-4 py-2 border-t hover:bg-gray-300">
                            <div className="flex justify-center items-center text-xl text-black">
                                <p>Manage Reject Property</p>
                            </div>
                        </div>
                    </div>


                </div>

            }

        </div>
    );
};

export default AdminComponent;
