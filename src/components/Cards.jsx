import React, { Component } from 'react'

export default class Cards extends Component {
  state = {
    data: {},
    count: 1
  }

  handleNext = () => {
    if(this.state.count < 20){
      this.setState({ count: this.state.count + 1 })
    }
  }

  handlePrev = () => {
    if(this.state.count > 1){
      this.setState({ count: this.state.count - 1 })
    }
  }

baseUrl = 'https://fakestoreapi.com/products'

  componentDidMount = () => {
    const id = this.state.count
    fetch(`${this.baseUrl}/${id}`).then(res => res.json()).then(data => this.setState({ data }))
  }

  componentDidUpdate = (prevState) => {
    if ((prevState.count !== this.state.count) && (this.state.count > 0) ) {
      const id = this.state.count
      fetch(`${this.baseUrl}/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ data }))
    }
  }


  render() {
    return (
      <>
        <div>
          <div>

            <div className="cardItem">
              <div><img height={200} width={200} src={this.state.data.image} style={{borderRadius: '10px'}} alt="Product Image" /></div>
            </div>
            <div>Product: <strong>{this.state.count}</strong> </div>
            <div>Title: <strong>{this.state.data.title}</strong></div>
            <div>Category: <strong>{this.state.data.category}</strong></div>
            <div>Price: <strong>{this.state.data.price}$</strong></div>
          </div>
            <button onClick={this.handlePrev}>Prev</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button onClick={this.handleNext}>Next</button>
        </div>
      </>
    )
  }
}
