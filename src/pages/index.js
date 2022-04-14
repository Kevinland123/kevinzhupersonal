import * as React from "react"
import { pageStyles } from '../css/style.module.css'
import TableOfContents from "../components/tableOfContents"
import Main from "../components/main"

// markup
const IndexPage = () => {
  return (
    <main className={pageStyles}>
      <title>Kevin's Personal Website</title>
      <TableOfContents />
      <Main />
    </main>
  )
}

export default IndexPage
