
function Filmai(props) {
    const FID = props.product.FID;
    const title = props.product.title;
    const description = props.product.description;
    const category = props.product.category;
    const price = props.product.price;
    const length = props.product.length;
    const rating = props.product.rating;
    const actors = props.product.actors;

    return (
        <div class="col-4">
            <div className="card ">
                <div className="card-header">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <h5>{FID}</h5>
                    <h5>{description}</h5>
                    <h5>{category}</h5>
                    <h5>{price}</h5>
                    <h5>{length}</h5>
                    <h5>{rating}</h5>
                    <h5>{actors}</h5>
                </div>
            </div>
        </div>
    )

}
export default Filmai;