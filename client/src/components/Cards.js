import React from 'react'
import { Card, Image, Placeholder } from 'semantic-ui-react'

const CelebCard = matches => (
  <Card>
    <Image src={matches.celeb.url ? matches.celeb.url : <h1>Loading</h1>} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{matches.celeb.name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
        <p>{matches.confidence}%</p>
      </Card.Content>
  </Card>
)

export default CelebCard;