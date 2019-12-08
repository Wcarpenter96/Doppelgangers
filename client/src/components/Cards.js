import React from 'react'
import { Card, Image, Placeholder } from 'semantic-ui-react'

const CelebCard = matches => (
  <Card>
    <Image src={matches.celeb.url ? matches.celeb.url : <Placeholder><Placeholder.Image square /></Placeholder>} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{matches.celeb}</Card.Header>
    </Card.Content>
    <Card.Content extra>
        <p>{matches.confidence}%</p>
      </Card.Content>
  </Card>
)

export default CelebCard;