export default function SortFilter(product, sortBy, sortByPrice, outOfStock, fastDelivery) {

    function getSortedPriceData(product, sortByPrice) {
        if (sortByPrice === "LowToHigh") {
            return [...product].sort((a, b) => a["price"] - b["price"]);
        }
        else if (sortByPrice === "HighToLow") {
            return [...product].sort((a, b) => b["price"] - a["price"]);
        }

        return product;
    }
    function filterMobileBrand(mobile, sortBy) {
        if (sortBy === "apple") {
            return [...mobile].filter((item) => item.name === "apple");
        }
        else if (sortBy === "samsung") {
            return [...mobile].filter((item) => item.name === "samsung");
        }
        else if (sortBy === "xiaomi") {
            return [...mobile].filter((item) => item.name === "xiaomi");
        }
        else if (sortBy === "asus") {
            return [...mobile].filter((item) => item.name === "asus");
        }
        else if (sortBy === "vestel") {
            return [...mobile].filter((item) => item.name === "vestel");
        }
        else if (sortBy === "meizu") {
            return [...mobile].filter((item) => item.name === "meizu");
        }
        else if (sortBy === "huawei") {
            return [...mobile].filter((item) => item.name === "huawei");
        }
        return mobile;
    }

    function getFilterData(product, outOfStock, fastDelivery) {
        return [...product]
            .filter(({ delivery }) => {
                return fastDelivery ? delivery === "1 day" : true
            })
            .filter(({ instock }) => {
                return outOfStock ? instock : true

            })
    }

    let sortedMobileData = filterMobileBrand(product, sortBy)
    let sortedData = getSortedPriceData(sortedMobileData, sortByPrice);
    let filteredData = getFilterData(sortedData, outOfStock, fastDelivery)



    return filteredData;
}