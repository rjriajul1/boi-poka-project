export const getItemLocalStorage = ()=>{
    const getItem = localStorage.getItem('readList');
    if(getItem){
        const stored = JSON.parse(getItem);
        return stored;
    }else{
        return []
    }
}

export const saveToLocalStorage = storedBookData =>{
const convertString = JSON.stringify(storedBookData);
localStorage.setItem('readList', convertString)

}

export const addToLocalStorage = (id) =>{
    
    const storedBookData = getItemLocalStorage()
    if(storedBookData.includes(id)){
        alert('already this item exites')
        
    }else{
        storedBookData.push(id)
    }
    saveToLocalStorage(storedBookData)
   
 

}