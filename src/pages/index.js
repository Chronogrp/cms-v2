import React from "react"
import { Link } from "gatsby"
import { get } from "lodash" // Optional
import { graphql } from "gatsby"

// export default IndexPage

// Item Component
const Item = ({names, age}) => {
  console.log("title", {names})
  return(
    <div>
      <h1>{names}</h1>
    </div>
  )
}

// Index Page Component
const IndexPage = ({ data }) => {
  const nodes = get(data, "allGoogleSheetSheet1Row.edges", [])

  nodes.map(node =>
    console.log(node.node.names)
  )
  return (
    <>
      <p>jkdfbgk</p>
      <div>{nodes.map(node => <p key={node.node.chronoMembers}> {node.node.chronoMembers}</p>)}</div>

      <div>
          {nodes.map(node =>
            <Item key={node.node.names} {...node.node} />
          )}
      </div>
    </>
  )
}
export default IndexPage;

// GraphQL query to our spreadsheet
export const query = graphql`
  query {
    allGoogleSheetSheet1Row {
     edges {
       node {
         names
         age
         para
       }
     }
   }
  }
`;
