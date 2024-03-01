function MenuItem ({image, name, content, price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1 style={{marginBottom: '10px'}}>{name}</h1>
        <h6 style={{marginTop: '0px'}}>{content}</h6>
        <p><i style={{color: '#A52A2A'}}>{price} ₺</i></p>
    </div>
  )
}

export default MenuItem