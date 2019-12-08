import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CelebCard = matches => {
  console.log('Matches=', matches);
  console.log("matches.celeb.url=", matches.celeb.url);
  console.log("matches.url=", matches.url)
  return (
    < Card >
    <Image src={matches.celeb.url ? matches.celeb.url : matches.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{matches.celeb.name ? matches.celeb.name : matches.celeb}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <p>{matches.confidence}%</p>
    </Card.Content>
  </Card >
  )
}


export default CelebCard;