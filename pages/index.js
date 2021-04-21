import Head from 'next/head'
import Layout from "../components/Layout"
import Section1 from "../components/Section1"
import HomeVideo from "../components/HomeVideo"
import Section2 from "../components/Section2"


export default function Home() {
  return (
    <>
      <Layout>
        <HomeVideo />
        <Section1 />
        <Section2 />
      </Layout>
    </>
  )
}
