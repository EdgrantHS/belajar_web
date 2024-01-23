import './App.scss';
import React from 'react';
import Box from './Component/box';
import InputPair from './Component/InputPair';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: "",
      searchName: "",
      searchCategory: "",
      searchStatus: "",
      addName: "",
      addCategory: "",
      addStatus: "",
      addPrice: "",
      addQuantity: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this); 
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.setLastUpdated(this.props.newTime);
  } 
  
  setLastUpdated(value) {
    this.setState({
      lastUpdated: value
    })  
  }

  handleClick() {
    // api refresh data
    const now = new Date()
    this.setLastUpdated("PERLU API: " + now.toLocaleString())
  }

  handleAdd() {
    // BUTUH API ADD
    console.log(this.state.addName, this.state.addCategory, this.state.addStatus, this.state.addPrice, this.state.addQuantity);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSearch() {
    // BUTUH API SEARCH
    console.log(this.state.searchName, this.state.searchCategory, this.state.searchStatus);
  }

  render() {
    return(
      <div className="main">
        <div className="container-xl">
          <div className="row pt-5">
            <div className="col-6">
              <h1 className='h1'>Inventory Dashboard</h1>
              <h2 className='lead last-updated' id='last-updated'>{this.state.lastUpdated}</h2>
            </div>
            <div className="col-6">
              <button className="btn btn-lg custom-button float-end py-3" onClick={this.handleClick}>Refresh</button>
            </div>
          </div>
          <div className="row gx-5 pt-5">
            <div className="col-xl-3 position-relative">
              <Box customClass="row my-2" header="Search" items={[
                <InputPair id="s1" label="Nama" onChange={this.handleInputChange} value={this.state.searchName} name="searchName"/>,
                <InputPair id="s2" label="Kategori" onChange={this.handleInputChange} value={this.state.searchCategory} name="searchCategory"/>,
                <InputPair id="s3" label="Status" onChange={this.handleInputChange} value={this.state.searchStatus} name="searchStatus"/>,
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary mt-4 col-9" onClick={this.handleSearch}>Search</button>
                </div>
              ]}/>
              
              <div className="row py-3"></div>

              <Box customClass="row my-2" header="Add New Item" items={[
                <InputPair id="a1" label="Nama" onChange={this.handleInputChange} value={this.state.addName} name="addName"/>,
                <InputPair id="a2" label="Kategori" onChange={this.handleInputChange} value={this.state.addCategory} name="addCategory"/>,
                <InputPair id="a3" label="Status" onChange={this.handleInputChange} value={this.state.addStatus} name="addStatus"/>,
                <InputPair id="a4" label="Harga" onChange={this.handleInputChange} value={this.state.addPrice} name="addPrice"/>,
                <InputPair id="a5" label="Jumlah" onChange={this.handleInputChange} value={this.state.addQuantity} name="addQuantity"/>,
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary mt-4 col-9" onClick={this.handleAdd}>Add</button>
                </div>
              ]}/>

            </div>
            <div className="col-xl-9">
              <Box customClass="row my-2" header="Items" items={[
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
                // pagination
                <div className="d-flex justify-content-center align-items-center pt-4">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              ]}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;