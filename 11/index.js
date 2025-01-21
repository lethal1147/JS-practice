function findLongestWord(words) {
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest, 
        ""
    );
}

console.log(findLongestWord(['apple', 'banana', 'cherry', 'date'])); 
console.log(findLongestWord(['one', 'three', 'seven', 'twenty'])); 
console.log(findLongestWord(['cat', 'dog', 'elephant', 'antelope'])); 
console.log(findLongestWord([]));
console.log(findLongestWord(['ข้าวผัดกะเพราไก่ไข่ดาวไม่สุก', 'ข้าวมันไก่ใส่เครื่องในไก่', 'หมี่เหลืองลูกชิ้นเอ็นเนื้อเปื่อย', 'ส้มตำปูม้ากุ้งสด', 'ไข่ตุ๋น', 'หมูหวาน', 'ส้าจิ้น']));
console.log(findLongestWord(['Pepsi', 'Coca-Cola', 'Yakuza', 'Fanta', 'Oishi']));
console.log(findLongestWord(['ชาไทย', 'มัทฉะ', 'โอเลี้ยง', 'เอสเปรสโซ', 'ลาเต้', 'มอคค่า']));


module.exports = findLongestWord;