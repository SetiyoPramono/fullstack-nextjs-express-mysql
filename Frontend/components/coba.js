import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateDosen = () => {
  //deklarasi state
  const [_nama, setNama] = useState("");
  const [_nidn, setNidn] = useState("");
  const [_no_telepon, setNo_telepon] = useState("");
  const [_email, setEmail] = useState("");

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { nama, nidn, no_telepon, email } = router.query;

  useEffect(() => {
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof nidn == "string") {
      setNidn(nidn);
    }
    if (typeof no_telepon == "string") {
      setNo_telepon(no_telepon);
    }
    if (typeof email == "string") {
      setEmail(email);
    }
  }, [nama, nidn, no_telepon, email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/identitas/${_nidn}`, {
          nama: _nama,
          nidn: _nidn,
          no_telepon: _no_telepon,
          email: _email,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push("/admin/datadosen");
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-blod text-center mb-3">Edit Data Dosen</h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="NAMA"
                value={_nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <label htmlFor="nama">NAMA</label>
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nidn"
                type="text"
                placeholder="nidn"
                value={_nidn}
                onChange={(e) => setNidn(e.target.value)}
              />
              <label htmlFor="nidn">NIDN</label>
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="no_telepon"
                type="text"
                placeholder="No Telepon"
                value={_no_telepon}
                onChange={(e) => setNo_telepon(e.target.value)}
              />
              <label htmlFor="no_telepon">No telepon</label>
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="email"
                type="email"
                placeholder="email"
                value={_email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">NAMA</label>
            </div>
          </div>

          <div className="d-flex flex-row-reverse w-75">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDosen;