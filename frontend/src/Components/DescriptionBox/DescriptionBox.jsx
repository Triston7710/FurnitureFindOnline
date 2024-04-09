import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Enim excepturi culpa provident accusantium tempore consequuntur fugit nesciunt ex dolor totam magnam 
          tempora dolores laborum delectus repellendus, quos quis recusandae molestiae unde? Beatae quas ad ex illum fuga, 
          harum eveniet eaque quaerat maxime? Expedita officia quasi vel accusamus beatae corrupti aperiam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum 
          repellat eligendi, enim tenetur aperiam voluptatibus blanditiis magnam corporis suscipit?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
