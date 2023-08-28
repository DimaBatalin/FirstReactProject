import React, {useState} from "react";
import {IProduct} from "../models";
interface ProductProps {
    product: IProduct
}
export function Product({ product }: ProductProps) {
    const [details, setDatails] = useState(false)

    const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400"

    const btnClasses = ["py-2 px-4 border", btnBgClassName]

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items items-center mb-2"
        >
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{ product.title }</p>
            <span className="font-bold">{ product.price }</span>
            <button
                className={btnClasses.join(" ")}
                onClick={() => setDatails(!details)}
            >{ details ? "Скрыть детали" : "показать детали"}</button>
            { details &&<div>
                <p>{ product.description}</p>
                <p><span>Рэйтиг:</span> <span style={{fontWeight: "bold"}}>{ product?.rating?.rate }</span></p>
            </div>}

        </div>
    )
}