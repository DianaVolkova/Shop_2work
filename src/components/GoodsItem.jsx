function GoodsItem(props) {
    const id = props.mainId
    const name = props.displayName
    const full_background = props.granted[0].images.background
    const description = props.displayDescription
    const price = props.price.finalPrice
    const addToBasket = props.addToBasket

    // const {
    //     id, 
    //     name,
    //     full_background,
    //     description,
    //     price,
    //     addToBasket = Function.prototype
    // } = props;
    
    return(
        <div className="card" id={id}>
            <div className="card-image">
                { full_background == null ? <img src="no_image.png" alt={name} /> : <img src={full_background} alt={name} />}
                
            </div>
            <div className="card-content">
                <span className="card-title" style={{color: "black"}}>{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn"
                onClick={() =>
                props.addToBasket({
                    id,
                    name,
                    price,
                })
                }
                >Купить</button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export { GoodsItem };