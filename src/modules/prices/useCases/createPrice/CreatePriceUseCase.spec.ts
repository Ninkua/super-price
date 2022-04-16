import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { PricesRepositoryInMemory } from "@modules/prices/repositories/in-memory/PricesRepositoryInMemory";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { SupermarketsRepositoryInMemory } from "@modules/supermarkets/repositories/in-memory/SupermarketsRepositoryInMemory";
import { CreatePriceUseCase } from "./CreatePriceUseCase";



let pricesRepositoryInMemory: PricesRepositoryInMemory;
let createPriceUseCase: CreatePriceUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let supermarketsRepositoryInMemory: SupermarketsRepositoryInMemory;

describe("Create Price useCase", () => {

    beforeEach(() => {
        pricesRepositoryInMemory = new PricesRepositoryInMemory();
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        supermarketsRepositoryInMemory = new SupermarketsRepositoryInMemory();
        createPriceUseCase = new CreatePriceUseCase(
            pricesRepositoryInMemory,
            usersRepositoryInMemory,
            supermarketsRepositoryInMemory,
            productsRepositoryInMemory,
        );
    });


    it("Should be able to create a new Price", async () => {

        const user = await usersRepositoryInMemory.create({
            name: "John",
            lastname: "Doe",
            email: "johndoe@gmail.com",
            password: "john123",
        })

        const userCreated = await usersRepositoryInMemory.findByEmail("johndoe@gmail.com")

        const product = await productsRepositoryInMemory.create({
            name: "name test",
            gtin: "7898940123025",
            brand: "brand test",
            thumbnail: "link image test",
        })

        const supermarket = await supermarketsRepositoryInMemory.create({
            name: "supermarket test"
        })

        const price = await createPriceUseCase.execute({
            product_id: product.id,
            supermarket_id: supermarket.id,
            user_id: userCreated.id,
            price: 4.0
        })

        expect(price).toHaveProperty("id");
    })
})
