import React from 'react'
import data from './data'
import Card from './Card';
const cards = data.map(item => (
    <Card img={item.imageUrl}
    location={item.location}
    glink={item.googleMapsUrl}
    title={item.title}
    from={item.startDate}
    to={item.endDate}
    description={item.description}
    />

))
export default cards;