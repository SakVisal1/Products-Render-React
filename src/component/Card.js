 export const ProductCard = (props) => {
    const {id ,title ,images ,price,category} = props.product
    return(
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div class="card shadow-0 border-0 h-100 pb-3">
            <img src={images[0]} className="card-img-top" alt="image" />
            <div class="card-body pb-0">
                <div class="d-flex justify-content-between mb-2">
                    <a class="badge bg-success bg-opacity-10 text-success text-decoration-none ">{category.name}</a>
                    <a class="text-danger "><i class="far fa-heart fa-solid"></i></a>
                </div>
                <a to={`/viewdetails/${id}`} className="stretched-link text-decoration-none py-2">{title}</a>
                <h4 class="text-success mb-0 item-show">${price}</h4>
            </div>
        </div>
        </div>
    )
}