import React from 'react'
import Link from 'next/link'
import {urlFor} from '../lib/client';

const HeroBanner = ({HeroBanner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{HeroBanner.smallText}</p>
            <h3>{HeroBanner.midtText}</h3>
            <h1>{HeroBanner.largeText1}</h1>
            <Image src={urlFor(HeroBanner.image)} alt="headphones" className='hero-banner-image' />
        </div>
        <div>
            <Link href={`/product/${HeroBanner.product}`}>
                <button type="button">{HeroBanner.buttonText}</button>

            </Link>
            <div className="desc">
                <h5>description</h5>
                <p>{HeroBanner.desc}</p>
            </div>
        </div>

      
    </div>
  )
}

export default HeroBanner
