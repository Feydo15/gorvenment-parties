import React,{ useState } from "react";
import { Col, Row, Button, Card  } from "react-bootstrap";


function Display(backendData, handleDelete) {

  const [count, setCount] = useState(0);
  let parties = backendData
 
  console.log(backendData , "parties")

  const subtract = () =>{ 
    if(count <= 0){
      return 0;
    }else{
      return setCount(count - 1)
    }}

    

  return (
    <div>

<Row md={2} xs={1} lg={3} className="g-3">
           { parties.backendData.map((item) => (
             <Col key={item.id}>
                   <Card className="h-100">
      <>
      </>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <p className="fs-2">{item.title}</p>
           
          <p className="fs-2">{item.date}</p>
          
          <p className="fs-2">{item.leader}</p>
    
          <p className="fs-2">{item.members}</p>
        </Card.Title>
        <div className="mt-auto">
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() =>subtract()}>-</Button>
                <div>
                  <span className="fs-3">{count}</span>
                </div>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </div>
            </div>
            <Button size='sm' variant='danger' onClick={() => handleDelete(item._id)}>delete</Button>
        </div>
      </Card.Body>
    </Card>
             </Col>
           ))}
         </Row>


    </div>
  );
}

export default Display;
