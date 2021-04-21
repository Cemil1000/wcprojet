import Head from 'next/head'
import Layout from "../components/Layout"
import Section1 from "../components/Section1"
import HomeVideo from "../components/HomeVideo"

export default function Home() {
  return (
    <>
      <Layout>
        <HomeVideo />
        <Section1 />
      </Layout>
    </>
  )
}
