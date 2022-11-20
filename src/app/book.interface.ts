// class Book {
//     title: string;
//     imagePreviewUrl: string;
//     price: number;

//     constructor(title: string, imagePreviewUrl: string, price: number) {
//         this.title = title;
//         this.imagePreviewUrl = imagePreviewUrl;
//         this.price = price;
//     }
// }

// const book1 = new Book('Harry Potter', '', 90.99);

export interface Book {
    id: string;
    title: string;
    imagePreviewUrl: string;
    price: number;
}