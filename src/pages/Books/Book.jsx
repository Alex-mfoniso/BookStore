import React, { useState } from "react";
import MainBook from "./MainBook";
import Getbyid from "./Getbyid";
import PostBook from "./PostBook";
import UpdBook from "./UpdBook";
import DelBook from "./DelBook";
import { Button, Typography } from "antd";

const { Title } = Typography;

const Book = () => {
  const [activeComponent, setActiveComponent] = useState(null); // State to track active component

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Book Management
      </Title>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: 24 }}>
        <Button type="primary" onClick={() => setActiveComponent("MainBook")}>
          View All Books
        </Button>
        <Button type="primary" onClick={() => setActiveComponent("Getbyid")}>
          Get Book by ID
        </Button>
        <Button type="primary" onClick={() => setActiveComponent("PostBook")}>
          Add Book
        </Button>
        <Button type="primary" onClick={() => setActiveComponent("UpdBook")}>
          Update Book
        </Button>
        <Button type="primary" danger onClick={() => setActiveComponent("DelBook")}>
          Delete Book
        </Button>
      </div>

      {/* Render the active component */}
      {activeComponent === "MainBook" && <MainBook />}
      {activeComponent === "Getbyid" && <Getbyid />}
      {activeComponent === "PostBook" && <PostBook />}
      {activeComponent === "UpdBook" && <UpdBook />}
      {activeComponent === "DelBook" && <DelBook />}
    </div>
  );
};

export default Book;