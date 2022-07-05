import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const UserList = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "http://localhost:5000/users";

  useEffect(() => {
    const getPost = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPost();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user, index) => {
            // <tr>
            //   <td>{index + 1}</td>
            //   <td>{user.name}</td>
            //   <td>{user.email}</td>
            //   <td>{user.gender}</td>
            //   <td>
            //     <button className="btn btn-primary">Edit</button>
            //     <button className="btn btn-primary"></button>
            //   </td>
            // </tr>;

          })} */}
          <h2>lorem sadsad</h2>
          {posts.map((post, idx) => (
            <tr key={idx}>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.gender}</td>
              <td>
                <Link
                  href={`/admin/UbahUser?name=${post.name}
                    &email=${post.email}&gender=${post.gender}`}
                >
                  <a>Edit</a>
                </Link>
                <button className="btn btn-primary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
