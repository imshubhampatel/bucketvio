export default function SortFilter(product, sortBy, sortByPrice, showOutOfStock, showFastDelivery) {
    console.log("functin", showOutOfStock, showFastDelivery)

    function getSortedPriceData(product, sortByPrice) {
        if (sortByPrice && sortByPrice === "LowToHigh") {
            return [...product].sort((a, b) => a["price"] - b["price"]);
        }
        else if (sortByPrice && sortByPrice === "HighToLow") {
            return [...product].sort((a, b) => b["price"] - a["price"]);
        }

        return product;
    }


    function filterMobileBrand(mobile, sortBy) {
        if (sortBy && sortBy === "apple") {
            return [...mobile].filter((item) => item.name === "apple");
        }
        else if (sortBy && sortBy === "samsung") {
            return [...mobile].filter((item) => item.name === "samsung");
        }
        else if (sortBy && sortBy === "xiaomi") {
            return [...mobile].filter((item) => item.name === "xiaomi");
        }
        else if (sortBy && sortBy === "asus") {
            return [...mobile].filter((item) => item.name === "asus");
        }
        else if (sortBy && sortBy === "vestel") {
            return [...mobile].filter((item) => item.name === "vestel");
        }
        else if (sortBy && sortBy === "meizu") {
            return [...mobile].filter((item) => item.name === "meizu");
        }
        else if (sortBy && sortBy === "huawei") {
            return [...mobile].filter((item) => item.name === "huawei");
        }
        return mobile;
    }

    function getFilterData(product, showFastDelivery, showOutOfStock) {
        return [...product]
            .filter(({ instock }) =>
            (
                showOutOfStock
                    ? true
                    : instock
            ))
            .filter(({ delivery }) =>
            (
                showFastDelivery
                    ? delivery === "1 day"
                    : true
            ))

    }

    let sortedMobileData = filterMobileBrand(product, sortBy);
    let sortedData = getSortedPriceData(sortedMobileData, sortByPrice);
    let filteredData = getFilterData(sortedData, showFastDelivery, showOutOfStock);
    console.log("me", filteredData)

    return filteredData;
}