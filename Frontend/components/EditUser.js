import axios from "axios";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

const EditUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");

    const router = useRouter();
    const { id } = router.query;


    // useEffect(()=> {
    //   if (typeof name == "string"){
    //     setName(name);
    //   }if (typeof email == "string"){
    //     setEmail(email);
    //   }if (typeof gender == "string"){
    //     setGender(gender);
    //   }
    // }, [name, email, gender])

    useEffect(()=>{
      getUserByid();
    },[]);

    const UpdateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email,
                gender,
            });
            alert("Data Berhasil Di Update")
            Router.push("/")
        }catch (error) {
            console.log(error);
        }
    };

    const getUserByid = async () => {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setGender(response.data.gender);
    }
   

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Data Siswa
                </h5>
                <form onSubmit={UpdateUser}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Masukkan Nama"
                      value={name}
                      onChange={(e)=> setName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Nama</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Gender"
                      value={gender}
                      onChange={(e)=> setGender(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Gender</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
