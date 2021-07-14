
export const RenderComboBox = (list) => {
    let result = null;
    if(!Array.isArray(list)) {
        return result;
    }
    if(list.length > 0) {
        result = list.map((value, index) => {
            return <option key={index} value={value.key}>{value.val}</option>          
        })
    }
    return result;
}

export const GetImageToShow = (extension, base64) => {
    //data:image/png;base64,
    const data = "data:image/" + extension.toLowerCase() + ";base64," + base64;
    return data;
}