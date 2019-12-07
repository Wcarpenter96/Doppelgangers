import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CelebCard = matches => (
  <Card>
    <Image src={matches.celeb.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{matches.celeb.name}</Card.Header>
      <Card.Description>
        {matches.celeb.confidence}%
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CelebCard;