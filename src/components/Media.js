const Media = ({data}) => {
  return (
    <div className="media__wrapper">
      {data.map(date => {
        return (
          <div className="media__container" key={date.id} id={'media__container--' + date.id}>
            <div className="media__border" style={{backgroundColor: date.color}} key={date.id}></div>
            <div className="media__inner-container" key={date.id}>
              <h2 className="media__heading" key={date.id}>
                {date.position}
              </h2>
              <p className="media__text" key={date.id}>
                {date.description}
              </p>
              <img className="media__image" src={date.src} alt="#" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Media
