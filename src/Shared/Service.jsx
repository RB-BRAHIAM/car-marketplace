 const FormatResult = (resp) => {
    let result = [];
    let finalResult = [];
    resp.forEach((item) => {
        const listingId = item.carListing?.id;
        if (!result[listingId]) {
            result[listingId] = {
                car: item.carListing,
                images: [],
            }
        }
        if(item.images){
            result[listingId].images.push(item. carImages);
        }
    })

    result.forEach((item) => {
        finalResult.push({
            ...item.car,
            images: item.images,
        });
    })

    return finalResult;
};