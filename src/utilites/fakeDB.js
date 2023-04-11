const addToDb =id=>{
let applyJob={}

const storedJob=localStorage.getItem('Applied Job')
if(storedJob){
    applyJob=JSON.parse(storedJob)
}
const totalApplied=applyJob[id]
if(totalApplied){
    alert('already applied')
    // const newApplied=totalApplied +1
    // applyJob[id]= newApplied
}else{
    applyJob[id]= 1
}
localStorage.setItem('Applied Job',JSON.stringify(applyJob))
}

const getStoredJobs =()=>{
    let applyJob={}
    const storedJob=localStorage.getItem('Applied Job')
if(storedJob){
    applyJob=JSON.parse(storedJob)
} 
return applyJob
}

export{addToDb ,getStoredJobs}