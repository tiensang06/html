function phuongTrinhBacNhat(b,c){
    if (b==0){
        if (c==0){
            return "Phuong trinh vo so nghiem";
        } else{
            return "Phuong trinh vo nghiem";
        }
    } else{
        if (c !=0){
            return "Phuong trinh co nghiem x = " + ((-c)/2*b)
        }else{
            return 0;
        }
    }
}



function phuongTrinhBacHai(a, b, c) {
    if (a != 0) {
        let dental = b * b - 4 * a * c
        if (dental < 0) {
            return "Phuong trinh vo nghiem"
        }
        if (dental == 0) {
            let result = -b / 2 * a
            return "Phuong trinh co nghiem kep: x1 = x2 = " + result
        }
        if (dental > 0) {
            let x1 = (-b + Math.sqrt(dental)) / 2 * a
            let x2 = (-b - Math.sqrt(dental)) / 2 * a
            return "Phuong trinh co nghiem x1=" + x1 + ", x2=" + x2
        }
    } else {
        return phuongTrinhBacNhat(b,c)

    }
}
console.log(phuongTrinhBacHai(1,2*Math.sqrt(2),2));