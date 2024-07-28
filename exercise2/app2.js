const oldarray=[2,1,5,4];
function transformToObjects(oldarray) 
{
   return oldarray.map( item => ({val: item}) )
}
const newarray= transformToObjects(oldarray);
console.log(newarray);
