export const getItemLocalStorage = ()=>{
    const getItem = localStorage.getItem('readList');
    if(getItem){
        const stored = JSON.parse(getItem);
        return stored;
    }else{
        return []
    }
}

export const saveToLocalStorage = id =>{

const convertString = JSON.stringify(id);

localStorage.setItem('readList', convertString)

}

export const addToLocalStorage = (id) =>{
    
    const card = getItemLocalStorage()
    if(!card.includes(id)){
        card.push(id)
    }
    saveToLocalStorage(card)
   
 

}