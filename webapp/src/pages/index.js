import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Heading, Button } from "rebass"
import { useAuth } from "react-use-auth"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()
  const data = useStaticQuery(graphql`
    query {
      mdlapi {
        hello {
          world
        }
      }
    }
  `)

  const { liveData, loading } = useQuery(gql`
    query {
      hello {
        world
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Markdown Landing Page" />
      <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
      <p>Write a landing page for anything</p>
      <p>
        From GraphQL Server:{" "}
        {liveData ? liveData.hello.world : data.mdlapi.hello.world}
      </p>
      {loading ? <p>fetching...</p> : null}
      {isAuthenticated() ? <p>hello {user.nickname}</p> : null}
      <Button bg="highlight" onClick={login}>
        Get started
      </Button>
    </Layout>
  )
}

export default IndexPage
