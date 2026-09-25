import React from 'react'

export class ErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return this.props.fallback || (
        <div style={{ padding: '1rem', border: '1px solid red', margin: '1rem 0' }}>
          <h3>Something went wrong in this section.</h3>
          <button onClick={() => this.setState({ error: null })}>Try again</button>
        </div>
      )
    }

    return this.props.children
  }
}