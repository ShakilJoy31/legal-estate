"use client"

import { motion } from 'framer-motion'
import { useState } from 'react';
import CommunityComponentCSS from '../../style/ComponentStyle.module.css';
import SellProperty from '@/components/SellerComponents/SellProperty';
import CheckoutProperty from '@/components/SellerComponents/CheckoutProperty';

export default function Home() {
    const [sellProperty, setSellProperty] = useState(true);
    const [checkoutProperty, setCheckoutProperty] = useState(false);
    const [propertyForApproval, setPropertyForApproval] = useState(false);


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
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-black pb-8">
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
                </div>



            </div>


        </motion.div>
    );
}