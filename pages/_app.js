import React from "react";
import App from "next/app";
import "../styles.css";

class SpectreApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <style jsx>{`
          :global(body) {
            margin: 0;
            background: #000;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
        `}</style>
      </>
    );
  }
}

export default SpectreApp;
