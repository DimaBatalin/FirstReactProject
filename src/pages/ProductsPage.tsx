import React, {useContext} from "react";
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {Error} from "../components/Error";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open, close: closeModal} = useContext(ModalContext)

    const  createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }


    return (
        <div className="container mx-auto max-w-2pl pt-5">
            { loading && <Loader /> }
            { error && <Error error={error}/> }
            { products.map(product => <Product product={product} key={product.id}/>) }

            {modal && <Modal title="Create" onClose={()=>{closeModal()}}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl p-6"
                onClick={()=>{open()}}
            >Создать новый товар</button>
        </div>
    )
}