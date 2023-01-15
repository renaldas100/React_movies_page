
function Filmai2(props) {
    const FID = props.product2.FID;
    const title = props.product2.title;
    const description = props.product2.description;
    const category = props.product2.category;
    const price = props.product2.price;
    const length = props.product2.length;
    const rating = props.product2.rating;
    const actors = props.product2.actors;
    const image = props.image;

    return (
        <div class="col-4">
            <div className="card ">
                <div className="card-header">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <div className="mx-auto text-center">
                        {/*<img src="https://picsum.photos/200/200" class="img-fluid rounded" alt="new"/>*/}
                        {image}
                    </div>
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
export default Filmai2;