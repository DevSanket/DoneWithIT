import client from './client';

const endpoint = '/listings';

const getListings = (a,b,c) => client.get(endpoint);

const addListing = listing => {
    //content-type

    //application/json

    //multipart/form-data
    const data = new FormData();
    data.append('title',listing.title);
    data.append('price',listing.price);
    data.append('categoryId',listing.category.value);
    
    
}

export default {getListings};
