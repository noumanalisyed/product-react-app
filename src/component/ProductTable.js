import ProductRowItem from "./ProductRowItem"

function ProductTable(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map(product => (
                    <ProductRowItem
                        key={product.productId} 
                        productId={product.productId}
                        name={product.name}
                        price={product.price}
                        deleteProduct={product.deleteProduct}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ProductTable