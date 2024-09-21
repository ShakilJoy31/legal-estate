"use client"


import HomeSlider from "@/components/HomeSlider";
import Image from "next/image";
import DashboardCSS from '../style/Home.module.css';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className={`card ${DashboardCSS.homeCard}`}>
        <div className="card-body">
          <div className={`${DashboardCSS.homeContent}`}>
            <h1 className={`${DashboardCSS.homeTitle}`}>Buy and Sell Property with Ease</h1>
            <p className={`${DashboardCSS.homeDescription}`}>
              Discover a seamless way to buy and sell properties. Whether you're looking for your dream home or selling your property, we make the process simple, efficient, and transparent.
            </p>
          </div>

          <div className="card-actions justify-end">
            <button onClick={()=> router.push('/login')} className="btn btn-accent">Get Started Now</button>
          </div>
        </div>
      </div>


      <HomeSlider></HomeSlider>
    </div>
  );
}
