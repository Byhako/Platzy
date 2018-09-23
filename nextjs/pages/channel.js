import React, { Component } from 'react'

export default class extends Component {
  static async getInitialProps ({query}) {
    let idChannel = query.id

    let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let reqAudio = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    let dataAudio = await reqAudio.json()
    let audioclips = dataAudio.body.audio_clips

    let reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return {channel, audioclips, series}
  }
  render () {
    const { channel, audioclips, series } = this.props
    return (
      <div>
        <header>Podcats</header>
        <h1>
          {channel.title}
        </h1>

        <h2>Series</h2>
        {series.map((serie, i) => (
          <div key={i}>{serie.title}</div>
        ))}

        <h2>Ultimos Podcats</h2>
        {audioclips.map((clip, i) => (
          <div key={i}>{clip.title}</div>
        ))}



        <style jsx >{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          h1: {
            font-weight: 600;
            padding: 15px;
          }
          h2 {
            padding: 5px;
            font-size: 20px;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
          :global(body) {
            margin: 0;
          }
        `}</style>


      </div>
    )
  }
}