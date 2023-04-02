function ProductRowItem(props) {

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{props.productId}</th>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductRowItem