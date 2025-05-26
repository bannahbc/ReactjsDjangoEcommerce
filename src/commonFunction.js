import { base_url } from './api';

const get_image_address = (image)=>{
    if (image) {
        return `${base_url}${image}`;
    } else {
        return `${base_url}/uploads/default.png`;
    }
}

export default get_image_address;