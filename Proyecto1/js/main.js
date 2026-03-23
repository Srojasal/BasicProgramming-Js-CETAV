
const age = 33;
const hasCoupon = true;
const couponDiscount = 30;
const hasStudentId = false;
let price = 5000;
let discount = 0;

    if (age <= 12){
        price = 0;
    } else {

        if (age >= 65) {
            discount = 40;
        }

        if (hasStudentId) {
            if (25 >= discount){
                discount = 25;
            }
        }

        if(hasCoupon) {
            if (couponDiscount > discount){
                discount = couponDiscount;
            }
        }
        
        let montoDescuento = price * (discount / 100)
        price = price - montoDescuento;
    }


console.log("El precio de su tiquete es: ", price);



