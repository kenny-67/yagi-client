import React from "react";

const Member = props => {
  return (
    <tr>
      {console.log(props.memberI)}

      <td>{props.member._id}</td>
      <td>{props.member.firstName}</td>
      <td>{props.element.lastName}</td>
      <td>{props.element.phoneNo}</td>
      <td>{props.element.email}</td>
      <td>{props.element.bio}</td>
    </tr>
  );
};

export default Member;
