import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/skardu.jpg'
              text="Discover Skardu's Hidden Gem The Enchanting Waterfall Expedition"
              label='Discovery'
              path='/services'
            />

            <CardItem
              src='images/hunza.jpg'
              text="Journey to Hunza's Heights: A Himalayan Wonderland Expedition."
              label='Expedition'
              path='/services'
            />
         </ul>

         <ul className='cards__items'>

            <CardItem
              src='images/kumrat-valley.webp'
              text="Kumrat Valley Expedition Unveiling Nature's Enchanting Hidden Gem."
              label='Wildscape'
              path='/services'
            />

            <CardItem
              src='images/malam-jabba.jpg'
              text="Malam Jabba A Snowy Alpine Retreat Amidst Majestic Peaks"
              label='Snowscape'
              path='/services'
            />

            <CardItem
              src='images/kalam-valley.webp'
              text="Explore Kalam's Peaceful Beauty A Majestic Valley Journey Adventure."
              label='Quest'
              path='/services'
            />
         </ul>

        </div>
      </div>
    </div>
  )
}
export default Cards;