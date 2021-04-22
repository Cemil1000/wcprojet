import Head from 'next/head'
import Layout from "../components/Layout"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section5 from "../components/Section5"
import HomeVideo from "../components/HomeVideo"


export default function Home() {
  return (
    <>
      <Layout>
        <HomeVideo />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
      </Layout>    
    </>
  )
}
