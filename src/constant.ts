export interface IProduct {
    title: string,
    image: string,
    badge: 'NEW' | "SOON" | "SALE",
    description: string,
    price: string
}

export const PRODUCTS: IProduct[] = [
    {
        title: 'Секретное видео',
        image: 'https://images.unsplash.com/photo-1492045379936-abb525f8dacb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3097&q=80',
        badge: 'NEW',
        description: 'Видео с переводом, доступ к которому вы можете приобрести',
        price: '1 000'
    }
]