export const check = (tuoi) => {
    if (tuoi > 18) {
        tuoi = "Trên độ tuổi vị thành niên";
    } else {
        tuoi = "Dưới độ tuổi vị thành niên"
    } 
    return tuoi;
}

export const BMI = (W,H) => {
	if(W/(H*H)>=40){console.log('Beo phi cap do III')}
		else if(W/(H*H)<=39.9 && W/(H*H)>=35.0){return('Beo phi cap do II')}
			else if(W/(H*H)<=34.9 && W/(H*H)>=30.0){return('Beo phi cap do I')}
				else if(W/(H*H)<=29.9 && W/(H*H)>=25.0){return('Thua can')}
					else if(W/(H*H)<=24.9 && W/(H*H)>=18.5){return('Binh thuong')}
						else{return('Khong dat chuan')}
    return W,H;
}