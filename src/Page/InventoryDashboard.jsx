import './InventoryDashboard.scss';
import React from 'react';
import Box from '../Component/box';
import InputPair from '../Component/InputPair';

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
      addQuantity: "",
      data: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.setLastUpdated(this.props.newTime);

    fetch('data.json')
      .then(response => response.json())
      .then(data => {this.setState({data : data})})
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
    return (
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
                <InputPair id="s1" label="Nama" onChange={this.handleInputChange} value={this.state.searchName} name="searchName" />,
                <InputPair id="s2" label="Kategori" onChange={this.handleInputChange} value={this.state.searchCategory} name="searchCategory" />,
                <InputPair id="s3" label="Status" onChange={this.handleInputChange} value={this.state.searchStatus} name="searchStatus" />,
                  <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary mt-4 col-9" onClick={this.handleSearch}>Search</button>
                </div>
              ]} />

              <div className="row py-3"></div>

              <Box customClass="row my-2" header="Add New Item" items={[
                <InputPair id="a1" label="Nama" onChange={this.handleInputChange} value={this.state.addName} name="addName" />,
                <InputPair id="a2" label="Kategori" onChange={this.handleInputChange} value={this.state.addCategory} name="addCategory" />,
                <InputPair id="a3" label="Status" onChange={this.handleInputChange} value={this.state.addStatus} name="addStatus" />,
                <InputPair id="a4" label="Harga" onChange={this.handleInputChange} value={this.state.addPrice} name="addPrice" />,
                <InputPair id="a5" label="Jumlah" onChange={this.handleInputChange} value={this.state.addQuantity} name="addQuantity" />,
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary mt-4 col-9" onClick={this.handleAdd}>Add</button>
                </div>
              ]} />

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
                        {this.state.data.map((data, index) => (
                          <tr key={data.name + index}> 
                            <td>{data.Nama}</td>
                            <td>{data.Kategori}</td>
                            <td>{data.Status}</td>
                            <td>{data.Harga}</td>
                            <td>{data.Jumlah}</td>
                          </tr>))
                        }
                    </tbody>
                  </table>
                </div>,
                // pagination
                <div className="d-flex justify-content-center align-items-center pt-4">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                      <li class="page-item">
                        <button class="page-link" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </button>
                      </li>
                      
                      <li class="page-item"><button class="page-link">1</button></li>
                      <li class="page-item"><button class="page-link">2</button></li>
                      <li class="page-item"><button class="page-link">3</button></li>
                      <li class="page-item">
                        <button class="page-link" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              ]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;