import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { men_kurta } from '../../../Data/men_kurtas'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className ='space-y-10 py-20 flex flex-col justify-center px-15 lg:px-10'>
     < HomeSectionCarousel data={men_kurta} sectionName={"Mens's Kurta"}/>
     < HomeSectionCarousel data={men_kurta} sectionName={"Mens's Shoes"}/>
     < HomeSectionCarousel data={men_kurta} sectionName={"Mens's shirt"}/>
     < HomeSectionCarousel data={men_kurta}sectionName={"Women's saree"}/>
     < HomeSectionCarousel data={men_kurta}sectionName={"Women's dress"}/>

      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default HomePage
