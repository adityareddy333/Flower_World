import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Img1 from '../img/Bunch.png';
import F1 from '../img/F1.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/Home.css'
import Img2 from '../img/Bunch6.jpg';
import Img3 from '../img/Bunch5.jpg';
import image2 from '../img/Image2.jpg'
import image3 from '../img/image3.jpg'
import lily from '../img/lily.jpg'
import merry from '../img/merry.jpg'
import floral from '../img/floral.jpg'
import lavish from '../img/lavish.jpg'
import lilyb from '../img/lilyb.jpg'

const dummyLink = '/order';


function Home() {
 
    const handleOrderButtonClick = (event) => {
      // Open the dummy link in a new window or tab
      event.preventDefault();
      window.location.assign(dummyLink);
    };
    return (
    <>
    <div style={{ backgroundColor: 'lightpink' }}>
      {/* Carousel component with placeholder items */}
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={Img1} alt="Img1" />
          <Carousel.Caption>
            <h3>Blossom Elegance Gallery</h3>
            <p>Transform Moments: Elevate Your World with the Language of Flowers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img2} alt="Img2" />
          <Carousel.Caption>
            <h3>Petals Perfection Showcase</h3>
            <p>Embrace Elegance: Where Every Petal Unveils a Story of Joy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} alt="Img3" />
          <Carousel.Caption>
            <h3>Floral Splendor Exhibit</h3>
            <p>Blossoming Beauty, Captivate Every Moment with Our Enchanting Blooms!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Container to hold the card layout */}
      <Container>
        {/* Row to contain the columns of cards with top margin */}
        <Row className="mt-4">
          {/* Column 1 */}
          <Col md={3} style={{ backgroundColor: '#ffcccc' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={floral} />
              <Card.Body>
                <Card.Title align="center"><b>Floral Haven In Vase</b></Card.Title>
                <Card.Text>
                Elevate your space with Floral Haven in Vase – where nature's elegance meets stunning arrangements. Unveil the extraordinary and celebrate every moment with timeless beauty.
                </Card.Text>
                <Button variant="primary" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 2 */}
          <Col md={3} style={{ backgroundColor: '#ccffcc' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title align="center"><b>Bouquet Of Pink Roses</b></Card.Title>
                <Card.Text>
                Embrace the Romance: A Stunning Bouquet of Pink Roses. Elevate your moments with the timeless beauty of love and elegance..
                </Card.Text>
                <Button variant="primary" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 3 */}
          <Col md={3} style={{ backgroundColor: '#ccccff' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title align="center"><b>Bouquet Of Pink Roses & Purple Orchids</b></Card.Title>
                <Card.Text>
                   Dream in Colors: A Mesmerizing Bouquet of Pink Roses and Purple Orchids. Elevate your moments with the enchanting fusion of romance and sophistication.
                </Card.Text>
                <Button variant="primary" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 4 */}
          <Col md={3} style={{ backgroundColor: '#ffffcc' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={lily} />
              <Card.Body>
                <Card.Title align="center"><b>Bouquet of Lilies</b></Card.Title>
                <Card.Text justify-text="left">
                  Graceful Lily Elegance: Unveil the beauty of simplicity with our exquisite lily arrangements. Elevate any space with the timeless charm of these delicate blooms.
                </Card.Text>
                <Button variant="primary" align-content="center" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 5 */}
          <Col md={3} style={{ backgroundColor: '#ffccff' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={merry} />
              <Card.Body>
                <Card.Title align="center"><b>Merry Times</b></Card.Title>
                <Card.Text>
                   Experience the magic of Merry Times through the enchanting beauty of our festive floral arrangements.
                </Card.Text>
                <Button variant="primary" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 6 /}{/ Column 6 */}
          <Col md={3} style={{ backgroundColor: '#ccffec' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={F1} />
              <Card.Body>
                <Card.Title align="center"><b>Bouquet Of Blue Orchids</b></Card.Title>
                <Card.Text>
                  Captivate the senses and embrace tranquility with the enchanting allure of these unique and elegant blooms.
                </Card.Text>
                <Button variant="primary" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Column 7 */}
          <Col md={3} style={{ backgroundColor: '#ccffec' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={lavish} />
              <Card.Body>
                <Card.Title align="center"><b>Lavish Floral Wonder</b></Card.Title>
                <Card.Text>
                   Indulge in Lavish Floral Wonder: Elevate your surroundings with opulent blooms, creating an enchanting tapestry of beauty and elegance.
                </Card.Text>
                <Button variant="primary" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Column 8 */}
          <Col md={3} style={{ backgroundColor: '#ccffec' }}>
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={lilyb} />
              <Card.Body>
                <Card.Title align="center"><b>Bouquet Of Pink Lilies</b></Card.Title>
                <Card.Text>
                   Radiant Pink Lilies: Unveil elegance and charm with our enchanting bouquet. Elevate your moments with the timeless allure of these delicate and graceful blooms.
                </Card.Text>
                <Button variant="primary" onClick={handleOrderButtonClick}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      </div>
   </>
  );
}

export default Home;