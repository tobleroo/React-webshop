

export default function Search({shopItems, updateShopItems, orgList}) {

    function filterItems(e) {
        // console.log(e.target.value)

        if(e.target.value === "") {
            updateShopItems(orgList);
            console.log(orgList)
        } else {
            const filteredItems = orgList.filter(item => item.name.toLowerCase()
                                                .includes(e.target.value.toLowerCase()));
            
            updateShopItems(filteredItems);  
        }
        
    }

    return (
        <div className="search">
            <input type="text" placeholder="Search for item" onChange={(e) => filterItems(e)}/>
        </div>
    )

}