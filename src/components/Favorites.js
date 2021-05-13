import React from 'react'
import './Favorites.css'
import PostCard from './PostCard'
import weightLoss from '../../static/images/diet.svg'
import pineappleImage from '../../static/images/pineapple-blog.jpg'
import fruitImage from '../../static/images/fruit-blog.jpg'
import hotdogImage from '../../static/images/hotdog-squeeze.jpg'
import { Link } from 'react-feather'

const Favorites = (props) => (
    <div className='container favorite-section'>
        <p>While you're here</p>
        <h3>Check out these nutrition resources</h3>
        <div className='favorite-grid'>
            <PostCard 
                slug='/posts/how-to-keep-the-weight-off/' 
                title='How To Keep The Weight Off'
                featuredImage={pineappleImage}
                excerpt='Losing weight is only one part of becoming a healthier person. Keeping the weight off is often the greater challenge for most of us. Here are a few tips on how to keep it off.'/>
            <PostCard 
                slug='/long-term-weightloss' 
                title='Best practices for Long Term Weightloss'
                featuredImage={fruitImage}
                excerpt='There is a new piece of tech or fad that promises a quick fix coming to marker on a monthly basis. Here is what you need to know to avoid failure in your weightloss efforts.'/>  
            <PostCard 
                slug='/halifax-dietitians' 
                title='Who are the Best Dietitians in Halifax?'
                featuredImage={hotdogImage}
                excerpt="In the age of influencers, it's easy to fall for fame over effectiveness. Click here to learn how to pick the right Dietitian for your needs."/>
        </div>
        <div className='resource-button'>
            <button href='/'>See More Resources</button>
        </div>
    </div>
        
)

export default Favorites