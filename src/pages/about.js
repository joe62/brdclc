import React from 'react'
import Layout from '../components/layout'
const AboutPage = () => {
  return (
    <Layout pageTitle={`About me`}>
      <p>Hi there! I'm the proud creator of this site, which I build with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <>
  <title>About Me</title>
  <meta name='description' content='abc' />
</>

export default AboutPage