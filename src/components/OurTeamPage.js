import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const OurTeamPage = () => {
    return (
        <div>
          <Card>
            <CardImg top width="100%" src="./Daniel.png" alt="Profile pic" />
            <CardBody>
              <CardTitle tag="h5">Daniel Vargas</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Lead Developer</CardSubtitle>
              <CardText>Daniel is a software developer</CardText>
              <Button type='primary'>Button</Button>
            </CardBody>
          </Card>
        </div>
      );

}

export default OurTeamPage;