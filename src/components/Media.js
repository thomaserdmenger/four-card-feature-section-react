// import {position, description, images} from '../data/data'

const Media = ({pos, des, src, colors}) => {
  return (
    <div>
      {pos.map((pos, idx) => (
        <div className="media__container" key={'div_' + idx}>
          <div className="media__border" style={{backgroundColor: colors[idx]}}></div>
          <div className="media__inner-container">
            <h2 className="media__heading" key={'pos_' + idx}>
              {pos}
            </h2>
            <p className="media__text" key={'des_' + idx}>
              {des[idx]}
            </p>
            <img className="media__image" key={'img_' + idx} src={src[idx]} alt={pos[idx]} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Media
