// import React from "react";
// import PostBook from "./PostBook";
// import UpdBook from "./UpdBook";
// import DelBook from "./DelBook";
// import ComId from "./comid";
// import MainBook from "./MainBook";

// const Book = () => {

//   return (
//     <div >

//       <MainBook/>
//       <ComId/>
//       <PostBook/>
//       <UpdBook/>
//       <DelBook/>
//     </div>
//   );
// };

// export default Book;

import React from "react";
import PostBook from "./PostBook";
import UpdBook from "./UpdBook";
import DelBook from "./DelBook";
import MainBook from "./MainBook";
import { Row, Col, Card, Typography } from "antd";
import Getbyid from "./Getbyid";


const { Title } = Typography;

const Book = () => {
  return (
    <div
      style={{
        padding: "24px",
        marginLeft: 250, // Adjust content to the right to account for the fixed sidebar width
        background: "#f0f2f5", // Light background for better contrast
        minHeight: "100vh", // Ensure full viewport height
      }}
    >
      <Title level={2} style={{ marginBottom: 24 }}>
        Book Management
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Main Book" bordered>
            <MainBook />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Composite ID" bordered>
         
         <Getbyid/>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Add Book" bordered>
            <PostBook />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Update Book" bordered>
            <UpdBook />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Delete Book" bordered>
            <DelBook />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Book;
