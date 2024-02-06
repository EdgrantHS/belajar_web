import './InventoryCards.scss'
import React from "react";
import Box from "../Component/box";

export default class InventoryCards extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex pt-5 justify-content-center">
          <div className="col-xl-8">
            <h1 className='py-3'>Print Nota</h1>
            <Box customClass="row my-1" header="Items" items={[
              <div className='row'>
                <div className='col-md-6 text-start'>
                  <p className='px-3'>
                    Nama Toko: <br />
                    Alamat: <br />
                    No. Telp: <br /> 
                  </p>
                </div>
                <div className='col-md-6 text-end'>
                  <p className='px-3'>
                    Tanggal: <br />
                    No. Nota: <br />
                  </p>
                </div>  
              </div>,
              // table
              <div className="d-flex justify-content-center align-items-center">
                <table className="table rounded-table">
                  <thead>
                    <tr className='table-primary'>
                      <th scope="col">Nama</th>
                      <th scope="col">Kategori</th>
                      <th scope="col">Status</th>
                      <th scope="col">Harga</th>
                      <th scope="col">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item 1</td>
                      <td>Category 1</td>
                      <td>Available</td>
                      <td>10000</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Item 2</td>
                      <td>Category 2</td>
                      <td>Available</td>
                      <td>20000</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>Item 3</td>
                      <td>Category 3</td>
                      <td>Not Available</td>
                      <td>30000</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Item 4</td>
                      <td>Category 4</td>
                      <td>Available</td>
                      <td>40000</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>Item 5</td>
                      <td>Category 5</td>
                      <td>Not Available</td>
                      <td>50000</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>Item 6</td>
                      <td>Category 6</td>
                      <td>Available</td>
                      <td>60000</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>Item 7</td>
                      <td>Category 7</td>
                      <td>Not Available</td>
                      <td>70000</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td>Item 8</td>
                      <td>Category 7</td>
                      <td>Not Available</td>
                      <td>70000</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td>Item 9</td>
                      <td>Category 7</td>
                      <td>Not Available</td>
                      <td>70000</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td>Item 10</td>
                      <td>Category 7</td>
                      <td>Not Available</td>
                      <td>70000</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      {/* <td><input type='text' className='form-control' placeholder='Item 10' /></td> */}
                      <td>Item 11</td>
                      <td>Category 7</td>
                      <td>Not Available</td>
                      <td>70000</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td>Item 12</td>
                      <td>Category 7</td>
                      <td>Not Available</td>
                      <td>70000</td>
                      <td>70</td>
                    </tr>
                  </tbody>
                </table>
              </div>,
              <div className="row pt-1 px-5 g-3">
                <div className="col-md-6">
                  <button className="btn btn-primary btn-lg btn-block">Cetak</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-secondary btn-lg btn-block">Simpan</button>
                </div>
              </div>
            ]} />
          </div>
        </div>
      </div>
    )
  }
}