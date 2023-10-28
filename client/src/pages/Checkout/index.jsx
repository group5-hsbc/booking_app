import React from 'react'
import { Banner } from '../../components'
const Checkout = () => {
  return (
    <div>
        <Banner page={'Checkout'}/>
    <div class="text-lg font-semibold px-4">
    Kamis, 22 Oktober 2023 - 23 Oktober 2023
</div>

<div className="text-gray-500 px-4">
    1Malam, 1Kamar
</div>

<div className="font-semibold px-4">
    Presidential Room
</div>

<div className="flex flex-row px-4 gap-32 mb-10">
    <div className="w-1/2 px-6">
        <ul className="text-gray-500 list-disc">
            <li>Balkon</li>
            <li>Living room</li>
            <li>Dining area</li>
            <li>Kunci kamar elektronik</li>
            <li>Kolam renang outdoor</li>
            <li>Pusat kebugaran</li>
            <li>Pusat layanan bisnis</li>
            <li>Layanan kamar 24 jam</li>
        </ul>
    </div>
    
    <div className="w-1/2">
        <ul className="text-gray-500 list-disc">
            <li>Layanan telepon sambungan langsung internasional</li>
            <li>TV kabel</li>
            <li>Kotak penyimpanan di kamar</li>
            <li>Air mineral kemasan</li>
            <li>Pembuat kopi atau teh</li>
            <li>Minibar</li>
            <li>Dapur mini</li>
            <li>Bathtub</li>
        </ul>
    </div>   
</div>

<div className='flex flex-col px-4 mx-5'>
    <div className='flex justify-between mb-5'>
        <span className='font-semibold text-lg'>Total</span>
        <span className='text-red-600 font-semibold text-lg'>Rp 3.000.000</span>
    </div>    
        <button type='Submit' className='w-full block h-24 px-10 mx-auto rounded-lg text-white font-semibold text-lg bg-blue-600 hover:bg-blue-700'>Checkout</button>
</div>



    </div>
  )
}

export default Checkout