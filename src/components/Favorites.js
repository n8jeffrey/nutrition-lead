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
                slug='/lose-weight' 
                title='How To Keep The Weight Off'
                featuredImage={pineappleImage}
                excerpt='Losing weight is only one part of becoming a healthier person. Keeping the weight off is often the greater challenge for most of us. Here are a few tips on how to keep it off.'/>
            <PostCard 
                slug='/lose-weight' 
                title='What is the Difference Between a Dietitian and a Nutritionist?'
                featuredImage={fruitImage}
                excerpt='In some parts of the world those two roles are the same. But there is one very important difference you should know about.'/>  
            <PostCard 
                slug='/lose-weight' 
                title='What is the Best Diet to Lose Weight?'
                featuredImage={hotdogImage}
                excerpt='There are so many diets out there, but which one is right for you goals?'/>
        </div>
        <div className='resource-button'>
            <button href='/'>See More Resources</button>
        </div>
    </div>
        
)

export default Favorites