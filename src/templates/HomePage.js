import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import FormSection from '../components/FormSection'
import QuoteSection from '../components/QuoteSection'
import dietImage from '../../static/images/diet.svg'
import BodySection from '../components/BodySection'
import PostSection from '../components/PostSection'
import Favorites from '../components/Favorites'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <FormSection />
    <QuoteSection quote='"Doing nutrition the right way was easier than I thought. It changed my life."'/>

    <section className="section">
      <div className="container half-container">
        <BodySection body={body} backgroundImage={dietImage} title='image of dietitian'/>
      </div>
    </section>
    <Favorites />
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
