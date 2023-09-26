import React from 'react'
import { client } from '../client';
import Posts from '../components/Posts';
import "../styles/about.css";
import CommonSection from '../shared/CommonSection';
import ServicesList from "../services/ServicesList";
import { Container, Row, Col } from 'reactstrap';


class AboutUs extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        console.log(response)
        this.setState({
          articles: response.items
        })
      })
      .catch(console.error)
  }

  render() {
    return (
      <>
        <CommonSection title={"About Us"} />
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServicesList />
                </Row>
            </Container>
        </section>

        <div className="App">
          <div className='container'>
            <main>
              <div className='wrapper'>
                <Posts posts={this.state.articles} />
              </div>
            </main>
          </div>
        </div>
        
      </>
    );
  }
}

export default AboutUs;
