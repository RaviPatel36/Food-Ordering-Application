export interface menuDish {
    id: number,
    image: string,
    title: string,
    amount: number,
    transId: number,
    time: string,
    bank: string,
    status: string
}


export interface dish {
    image_id: number,
    image: string
}


export interface payment {
    date: any,
    transactions: [{
        id: number,
        image: string,
        title: string,
        amount: number,
        transId: number,
        time: string,
        bank: string,
        status: string
    }]
}

export interface order {
    date: string,
    order: [{
        id: number,
        image: string,
        title: string,
        amount: number,
        transId: number,
        time: string,
        status: string,
    }]

}