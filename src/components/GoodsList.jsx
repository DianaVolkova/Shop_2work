import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    // const goods = props.goods
    // const addToBasket = props.addToBasket


    if (!goods.length) {
        return <h3>Not found</h3>;
    }

    return(
        <div className="goods">
            {goods.slice(60, 90).map((item) => (
                <GoodsItem key={item} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };