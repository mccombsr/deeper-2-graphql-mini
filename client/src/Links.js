import React, { Component } from 'react';
import gql from 'graphql-tag';

class Links extends Component {
    render() {
        return (
            <div>
                Links will go here
            </div>

        )
    }
}

//Let's build a graphql query
// The second line is the query we want to call on the server
// The third and on is the data we're getting back with which pieces we want
const LINKS_QUERY = gql`
    query linksQuery {
        links {
            id
            url
            description
        }
    }
`

//IF we wrap our component like this it will auto run the query for us
// and put the results on props
export default Links
