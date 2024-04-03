import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs'; // Importing edit and delete icons

function ServicesForm() {
  const [newServiceTitle, setNewServiceTitle] = useState('');
  const [newServiceDescription, setNewServiceDescription] = useState('');
  const [services, setServices] = useState([
    {
      title: 'Oil change',
      description: 'Every 5000 kilometers or so, you need to change the oil in your car to keep your car engine in the best possible shape.'
    },
    {
      title: 'Tire Rotation',
      description: 'Rotate your tires every 6000 miles to ensure even wear and prolong their lifespan.'
    },
    // Add more services as needed
  ]);

  const handleAddService = () => {
    const newService = {
      title: newServiceTitle,
      description: newServiceDescription
    };
    setServices([...services, newService]);
    setNewServiceTitle('');
    setNewServiceDescription('');
  };
  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '20px 60px' }}>
      <div className="sec-title style-two">
        <h2>Services that we offer</h2>
        <div className="text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</div>
      </div>
      <Table  bordered hover style={{ backgroundColor: '#ffffff' }}>
        <tbody>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Oil change</h4> 
                <p>Every 5000 kilometers or so, you need to change the oil in your car to keep your car engine in the best possible shape.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight: '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Tire Rotation</h4> 
                <p>Rotate your tires every 6000 miles to ensure even wear and prolong their lifespan.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight: '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Brake Inspection</h4> 
                <p>Regular brake inspections are essential to ensure the safety of your vehicle and prevent brake failure.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight: '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Fluid Flush</h4> 
                <p>Flush your vehicle's fluids regularly to maintain optimal performance and prevent costly repairs.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight: '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Engine Tune-Up</h4> 
                <p>Regular engine tune-ups can improve fuel efficiency, prolong engine life, and prevent breakdowns.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight: '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Coolant Flush</h4> 
                <p>Flush your vehicle's coolant system regularly to prevent overheating and engine damage.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight: '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Wheel Alignment</h4> 
                <p>Wheel alignment ensures proper tire wear, improves vehicle handling, and increases fuel efficiency.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight:                 '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h4>Transmission Service</h4> 
                <p>Regular transmission service helps to maintain smooth shifting, prolongs transmission life, and prevents costly repairs.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="danger" size="sm" style={{ marginRight: '10px', fontSize: '12px' }}><BsTrash /></Button>
                <Button variant="primary" size="sm" style={{ fontSize: '12px' }}><BsPencil /></Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>

      <div style={{ backgroundColor: '#ffffff', padding: '20px', marginTop: '20px' }}>
      <div className="sec-title style-two">
        <h2>Add a New Service</h2> </div>
        <Form.Group>
          <Form.Label>Service Name</Form.Label>
          <Form.Control type="text" value={newServiceTitle} onChange={(e) => setNewServiceTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Service Description:</Form.Label>
          <Form.Control type="text" value={newServiceDescription} onChange={(e) => setNewServiceDescription(e.target.value)} style={{ height: '130px' }} />
        </Form.Group>
        <Button variant="danger" onClick={handleAddService} style={{ marginTop: '30px' }}>Add Service</Button>

      </div>
    </section>
  );
}

export default ServicesForm;

