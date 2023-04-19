import myImg from '../Asset/images/seal1.jpg'
import abbey from '../Asset/images/Abbey.png'
import iac from '../Asset/images/iac.png'
import ciit from '../Asset/images/ciit.jpg';
import dlsz from '../Asset/images/DLSZ_Seal.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
    return (
        <>
            <div className='image-about-container'><img src={myImg} alt='myImage' className='about-pic'></img></div>
            <div className="container-home-summary"> 
                <div className="about-title">INTRODUCTION</div>
                <div className="about-content">Hello, my name is JC, and I am a Software Developer with a strong background in Computer Science and Software Engineering. I graduated with Latin honours Magna Cum Laude from iAcademy, where I gained valuable knowledge and skills in programming, software development, and project management. In addition to my academic achievements, I have internship experience with Trend Micro and Accenture, where I worked on various projects and gained hands-on experience in software development. Moreover, I have also worked as a freelance web developer and designer, where I have collaborated with clients to create visually appealing and user-friendly websites. With my diverse experience and expertise in software development, I am committed to delivering high-quality solutions that meet the needs of clients and end-users.</div>
            </div>
            <br></br>
            <br></br>
            <div className="container-home-summary">
                <div className="about-title-education">EDUCATIONAL BACKGROUND</div>
                <CardGroup className='card-group'>
                    <Card>
                        <Card.Img variant="top" src={abbey}/>
                        <Card.Body>
                        <Card.Title>Abbey College Australia</Card.Title>
                        <Card.Text>
                            Advance Diploma in Information Technology (Network Telecommunications)
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">2023-2024</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={iac}/>
                        <Card.Body>
                        <Card.Title>iAcademy Philippines</Card.Title>
                        <Card.Text>
                            Bachelor of Science in Computer Science major in Software Engineering
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">2018-2022</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={ciit}/>
                        <Card.Body>
                        <Card.Title>CIIT Philippines</Card.Title>
                        <Card.Text>
                            Mobile Game Development Training using UNITY 3D and C#
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">2018</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={dlsz}/>
                        <Card.Body>
                        <Card.Title>De La Salle Santiago Zobel School</Card.Title>
                        <Card.Text>
                            Secondary Education
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">2013-2017</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            <br></br><br></br>
        </>
    )
    
}