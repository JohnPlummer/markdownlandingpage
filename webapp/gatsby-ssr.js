/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="markdownlandingpagetest99.us.auth0.com"
    auth0_client_id="XrY2UxkvpV11DqCatE7RzZPEJHbm2CTj"
  >
    {element}
  </AuthProvider>
)
