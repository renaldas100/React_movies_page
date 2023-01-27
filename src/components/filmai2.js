
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
        <div class="col-md-4">
            <div className="card bg-dark text-white">
                <div className="card-header">
                    <h4>{title}</h4>
                </div>
                <div className="card-body">
                    <div className="mx-auto text-center mb-2">
                        {/*<img src="https://picsum.photos/200/200" class="img-fluid rounded" alt="new"/>*/}
                        {image}
                    </div>
                    <h6>Nr.: {FID}</h6>
                    <h6 className="mb-0">Aprašymas:</h6>
                    <h6>{description}</h6>
                    <h6>Kategorija: {category}</h6>
                    <h6>Kaina: {price} EUR</h6>
                    <h6>Trukmė: {length} min</h6>
                    <h6>Įvertinimas: {rating}</h6>
                    <h6 className="mb-0">Aktoriai:</h6>
                    <h6>{actors}</h6>
                </div>
            </div>
        </div>
    )

}
export default Filmai2;