"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import CommunityComponentCSS from '../../style/ComponentStyle.module.css';
import SellProperty from '@/components/SellerComponents/SellProperty';
import CheckoutProperty from '@/components/SellerComponents/CheckoutProperty';
import PropertyForApproval from '@/components/SellerComponents/PropertyForApproval';
import PerndingPropertyRequest from '@/components/LawerComponent/PendingPropertyRequest';

export default function Home() {
    const [sellProperty, setSellProperty] = useState(true);
    const [checkoutProperty, setCheckoutProperty] = useState(false);
    const [propertyForApproval, setPropertyForApproval] = useState(false);
    const [role, setRole] = useState('');


    const handleLevel1 = () => {
        setSellProperty(true);
        setCheckoutProperty(false);
        setPropertyForApproval(false);
    };
    const handleLevel2 = () => {
        setSellProperty(false);
        setCheckoutProperty(true);
        setPropertyForApproval(false);
    };
    const handleLevel3 = () => {
        setSellProperty(false);
        setCheckoutProperty(false);
        setPropertyForApproval(true);
    };
    useEffect(() => {
        const getUser = localStorage.getItem("legalEstateUser");

        if (getUser) {
            const parsedUser = JSON.parse(getUser);
            setRole(parsedUser?.data?.role);
        }
    }, []);
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            {
                role === 'Seller' && <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-black pb-8">
                    <div
                        style={{
                            borderRadius: "5px",
                            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }}
                        className="flex w-full justify-between"
                    >
                        <div
                            onClick={handleLevel1}
                            className={`${sellProperty ? CommunityComponentCSS.newLevel : ""
                                } w-full hover:cursor-pointer`}
                        >
                            <p className="flex justify-center py-2 text-xl">Sell Property</p>
                        </div>

                        <div
                            onClick={handleLevel2}
                            className={`${checkoutProperty ? CommunityComponentCSS.newLevel : ""
                                } w-full hover:cursor-pointer`}
                        >
                            <p className="flex justify-center py-2 text-xl">Checkout Property</p>
                        </div>

                        <div
                            onClick={handleLevel3}
                            className={`${propertyForApproval ? CommunityComponentCSS.newLevel : ""
                                } w-full hover:cursor-pointer`}
                        >
                            <p className="flex justify-center py-2 text-xl">Property for Approval</p>
                        </div>
                    </div>


                    <div className='pt-4 flex justify-center'>
                        {
                            sellProperty && <SellProperty></SellProperty>
                        }


                        {
                            checkoutProperty && <CheckoutProperty></CheckoutProperty>
                        }

                        {
                            propertyForApproval && <PropertyForApproval></PropertyForApproval>
                        }
                    </div>



                </div>
            }

            {
                role === 'Lawer' && <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 h-full'><PerndingPropertyRequest></PerndingPropertyRequest></div>
            }



        </motion.div>
    );
}