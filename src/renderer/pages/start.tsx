import React from 'react'

export default class extends React.Component {
  state = {
    input: '',
    message: null
  }

  componentDidMount() {
    // start listening the channel message
    console.log('global', global.ipcRenderer)
    global.ipcRenderer.on('message', this.handleMessage)
  }

  componentWillUnmount() {
    // stop listening the channel message
    global.ipcRenderer.removeListener('message', this.handleMessage)
  }

  handleMessage = (event: Event, message: string) => {
    // receive a message from the main process and save it in the local state
    this.setState({ message })
  }

  handleChange = (event: any) => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    global.ipcRenderer.send('message', this.state.input)
    this.setState({ message: null })
  }

  render() {
    return (
      <div>
        <h1>Hello Electron!</h1>

        {this.state.message && <p>{this.state.message}</p>}

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
